import NextButton from "../components/Svgs/NextButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Components/Svg/NextButton',
  component: NextButton,
  argTypes: {},
} as ComponentMeta<typeof NextButton>;

const Template: ComponentStory<typeof NextButton> = (args) => <NextButton {...args} />
export const Default = Template.bind({});

Default.args = {};