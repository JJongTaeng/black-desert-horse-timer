import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '../components/Container';

export default {
  title: 'Components/Container',
  component: Container,
  argsTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>hello</div>
};