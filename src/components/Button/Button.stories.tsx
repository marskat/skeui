import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const;

const meta = {
  component: Button,
  argTypes: {
    aesthetic: {
      control: {
        type: "radio", // multi-select
      },
      options: aestheticOptions,
      description: "Aesthetic style",
    },
  },
  args: {
    aesthetic: "glassmorphic",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glassmorphic: Story = {
  args: {
    children: <div>button</div>,
    className: "skeui-p-3 skeui-text-black",
    aesthetic: "glassmorphic",
  },
};
export const Neumorphic: Story = {
  args: {
    children: <div>button</div>,
    className: "skeui-p-3 skeui-text-black",
    aesthetic: "neumorphic",
  },
};

// TODO: make sure card can be size full, add missing gm and nm implementations (button, nav), get rid of glasspanel, update prefix, decide on name
