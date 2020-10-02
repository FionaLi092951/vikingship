import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonExample, ButtonExampleProps } from './ButtonExample';

export default {
  title: 'Example/ButtonExample',
  component: ButtonExample,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonExampleProps> = (args) => <ButtonExample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ButtonExample',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ButtonExample',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ButtonExample',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ButtonExample',
};
