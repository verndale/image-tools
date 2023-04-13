require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
const url = require("url");
const { createApi } = require("unsplash-js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Setup unsplash
const unsplash = createApi({ accessKey: process.env.UNPLASH_API_KEY, fetch });

app.get("/", (req, res) => {
  const localUrl = `https://${req.get("host")}`;
  res.render("index", { url: localUrl, title: "Verndale Image Tools" });
});

app.get("/random/:query", async (req, res) => {
  const { w, h } = req.query;
  let seed = req.query.seed;
  let page = 1;
  let orientation = "landscape";

  if (w && isNaN(w)) {
    return res.status(400).send("Invalid width value");
  }

  if (h && isNaN(h)) {
    return res.status(400).send("Invalid height value");
  }

  if (seed) {
    if (isNaN(seed)) {
      return res.status(400).send("Invalid seed value");
    }

    page = Math.floor(seed / 30) + 1;
  }

  if (w && h && w / h < 0.75) {
    orientation = "portrait";
  }

  try {
    const result = await unsplash.search.getPhotos({
      query: req.params.query,
      orientation,
      page,
      per_page: 30,
    });

    if (result.errors) {
      res.status(400).send(result.errors);
    } else {
      // handle success here
      const {
        response: { results },
      } = result;
      let index;

      if (!results.length) {
        if (seed) {
          return res
            .status(404)
            .send(
              "No results found. Try changing the query or decreasing the seed."
            );
        }

        return res.status(404).send("No results found.");
      }

      if (seed) {
        seed = 30 - (page * 30 - seed);
        index = seed > results.length - 1 ? results.length - 1 : seed;
      } else {
        index = Math.floor(Math.random() * (results.length - 1)) + 1;
      }

      res.redirect(
        url.format({
          pathname: `/id/${results[index].id}`,
          query: req.query,
        })
      );
    }
  } catch (error) {
    res.status(500);
  }
});

app.get("/id/:id", async (req, res) => {
  const { w, h, format = "png" } = req.query;
  let queryParams = "";

  if (w && isNaN(w)) {
    return res.status(400).send("Invalid width value");
  }

  if (h && isNaN(h)) {
    return res.status(400).send("Invalid height value");
  }

  if (w && h) {
    queryParams += `&w=${w}&h=${h}&fit=crop&crop=faces,center`;
  } else if (h) {
    queryParams += `&w=${h}&&h=${h}&fit=crop&crop=faces,center`;
  } else if (w) {
    queryParams += `&w=${w}&h=${w}&fit=crop&crop=faces,center`;
  }

  if (format) {
    if (!["png", "jpg", "jpeg", "webp"].includes(format)) {
      return res.status(400).send("Invalid format");
    } else {
      queryParams += `&fm=${format}`;
    }
  }

  try {
    const result = await unsplash.photos.get({ photoId: req.params.id });

    if (result.errors) {
      res.status(400).send(result.errors);
    } else {
      // handle success here
      const { response } = result;

      const image = await fetch(response.urls.raw + queryParams);
      let buffer = await image.buffer();
      res.set("Content-Type", `image/${format}`);

      res.send(buffer);
    }
  } catch (error) {
    res.status(500);
  }
});

app.get("/info/:id", async (req, res) => {
  try {
    const result = await unsplash.photos.get({ photoId: req.params.id });

    if (result.errors) {
      res.status(400).send(result.errors);
    } else {
      // handle success here
      const { response } = result;

      res.json({
        id: response.id,
        width: response.width,
        height: response.height,
        description: response.description,
        links: response.links.html,
        author: response.user.name,
      });
    }
  } catch (error) {
    res.status(500);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
