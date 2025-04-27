import type { Meta, StoryObj } from "@storybook/react";
import { GlassButton } from "./GlassButton";

const meta = {
  component: GlassButton,
  argTypes: {},
  args: {
    neumorphic: true,
  },
} satisfies Meta<typeof GlassButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>button</div>,
    className: "ui-p-3",
    neumorphic: true,
  },
};
