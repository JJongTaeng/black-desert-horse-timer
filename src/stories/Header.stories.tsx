import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../components/Header";

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {}
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />
export const Default = Template.bind({});
Default.args = {
  title: '시작하기'
};