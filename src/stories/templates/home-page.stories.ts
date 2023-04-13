import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/templates/home-page.hbs';
import { Default as Intro, IntroProps } from '../modules/intro.stories';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type HomepageProps = {
  intro: IntroProps;
};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<HomepageProps> = {
  title: 'Templates/Home Page',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    intro: { control: 'object' }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<HomepageProps>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {
  args: {
    intro: Intro.args as IntroProps
  }
};
