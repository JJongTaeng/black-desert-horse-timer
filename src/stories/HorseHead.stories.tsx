import HorseHead from "../components/Svgs/HorseHead";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Components/Svg/HorseHead',
  component: HorseHead,
  argTypes: {},
} as ComponentMeta<typeof HorseHead>;

const Template: ComponentStory<typeof HorseHead> = (args) => <HorseHead {...args}/>;

export const Blue40 = Template.bind({});
Blue40.args = {
  size: 40,
  color: 'blue'
}
