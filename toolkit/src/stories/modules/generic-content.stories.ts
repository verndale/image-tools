import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/modules/generic-content.hbs';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export type GenericContentProps = {
  title: string;
  description: string;
  url: string;
};

// This default export determines where your story goes in the story list
// and the UI controls for the arguments that are passed to the template
const meta: Meta<GenericContentProps> = {
  title: 'Modules/Generic Content',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    url: { control: 'text' }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<GenericContentProps>;

/*
 * Below list all the stores for this component
 * More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
 */

export const Default: Story = {
  args: {
    title: 'Get random images that fit your designs',
    description:
      'Call the random service adding the query of interest and pass the dessired dimensions (width & height) as parameters:',
    url: '/random/pizza?w=200&h=300'
  }
};
