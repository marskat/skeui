import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  argTypes: {},
  args: {
    neumorphic: true,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>button</div>,
    className: "ui-p-3",
    neumorphic: true,
  },
};
