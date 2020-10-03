import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button, { ButtonProps, ButtonSize, ButtonType } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
} as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
// 	size: 'lg',
// 	btnType: ButtonType.Primary,
// };

const defaultButton: Story<ButtonProps>  = () => (
  <Button onClick={action('button clicked')}>default button</Button>
);

export const Default = defaultButton.bind({});


const buttonSize: Story<ButtonProps>  = () => (
  <>
    <Button size={ButtonSize.Large} onClick={action('button clicked')}>Large</Button>
    <Button size={ButtonSize.Small} onClick={action('button clicked')}>Small</Button>
  </>
);

export const DifferentButtonSize = buttonSize.bind({});

const buttonType: Story<ButtonProps>  = () => (
  <>
    <Button btnType={ButtonType.Primary} onClick={action('button clicked')}>Primary</Button>
    <Button btnType={ButtonType.Danger} onClick={action('button clicked')}>Danger</Button>
    <Button btnType={ButtonType.Link} onClick={action('button clicked')}>Link</Button>
    <Button btnType={ButtonType.Default} onClick={action('button clicked')}>Default</Button>
  </>
);

export const DifferentButtonType = buttonType.bind({});

const disabledBtn: Story<ButtonProps>  = () => (
  <>
    <Button btnType={ButtonType.Primary} disabled onClick={action('button clicked')}>Primary</Button>
    <Button btnType={ButtonType.Danger} disabled onClick={action('button clicked')}>Danger</Button>
    <Button btnType={ButtonType.Link} disabled onClick={action('button clicked')}>Link</Button>
  </>
);

export const DisabledButton = disabledBtn.bind({});

const roundCornerBtn: Story<ButtonProps>  = () => (
  <>
    <Button btnType={ButtonType.Primary} roundCorner onClick={action('button clicked')}>Primary</Button>
    <Button btnType={ButtonType.Danger} roundCorner onClick={action('button clicked')}>Danger</Button>
  </>
);

export const RoundCornerButton = roundCornerBtn.bind({});