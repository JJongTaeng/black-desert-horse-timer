import PrevButton from "../components/Svgs/PrevButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Components/Svg/PrevButton',
  component: PrevButton,
  argTypes: {},
} as ComponentMeta<typeof PrevButton>;

const Template: ComponentStory<typeof PrevButton> = (args) => <PrevButton {...args} />
export const Default = Template.bind({});

Default.args = {};