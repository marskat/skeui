import type { Meta, StoryObj } from "@storybook/react";
import { NeuButton } from "./NeuButton";

const meta = {
  component: NeuButton,
  argTypes: {},
  args: {},
} satisfies Meta<typeof NeuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neu: Story = {
  args: {
    children: <div>button</div>,
    className: "ui-p-3 ui-bg-slate-200 ui-text-black",
  },
};
