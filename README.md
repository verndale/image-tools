# Verndale Image Tools

Get random images provided by [Unplash](https://www.unsplash.com) to help you build your templates. This tool provides three endpoints to get a random image based on a query, or find one by it's Unplash id.

## Basic usage
To get an image based on a desired query, call the <code>/random</code> endpont appended by the query. If you want to get the image in an specific size, pass the width and the height as parameters.

```
/random/pizza?w=500&h=300
```

## Seed
Provide the seed parameter to get always the same image. This can help you keeping consistency when grabbing different sizes depending on media queries.

```
/random/pizza?seed=4
```

## Squared image
To get an squared image you can just pass one of the values for width or height.

```
/random/pizza?w=500
```

```
/random/pizza?h=500
```

## Image Formats
This api allows you to specify the image format you want to be returned. Suported values are <code>png</code> <code>jpg</code> <code>jpeg</code> and <code>webp</code>.

## Get images by it's [unsplash](https://www.unsplash.com) id
If you want to get an specific image from Unsplash, call the <code>/id</code> endpoint appended by the image's Unsplash id. This endpoint support the same parameters as the previous one.

## The picture Element
One of the uses of this api is to get an image in different sizes depending the size of the screen. You can also get images in different formats and provide fallback options for browsers that don't support them.

```html
<picture>
  <source media="(max-width: 740px)" srcset="https://verndale-image-tools.azurewebsites.net/random/pizza?w=740&h=444">
  <source media="(max-width: 980px)" srcset="https://verndale-image-tools.azurewebsites.net/random/pizza?w=980&h=588">
  <source media="(max-width: 1300px)" srcset="https://verndale-image-tools.azurewebsites.net/random/pizza?w=1300&h=780">
  <img src="https://verndale-image-tools.azurewebsites.net/random/pizza?w=1400&h=840" alt="Image description">
</picture>
```

```html
<picture>
  <source srcset="https://verndale-image-tools.azurewebsites.net/random/pizza?format=webp" type="image/webp">
  <img src="https://verndale-image-tools.azurewebsites.net/random/pizza?format=jpeg" alt="Image of a pizza">
</picture>
```

## Get image info
If you want to get the information for an specific image, call the <code>/info</code> endpoint appended by the image's Unsplash id.

```
/info/52jG7-FN22Y
```

```json
{
  "id": "52jG7-FN22Y",
  "width": 6000,
  "height": 4000,
  "description": "pizza",
  "links": "https://unsplash.com/photos/52jG7-FN22Y",
  "author": "Alexandra Gorn"
}
```
