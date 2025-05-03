import type { Meta, StoryObj } from "@storybook/react";
import { NeuCard } from "./NeuCard";

const meta = {
  component: NeuCard,
  argTypes: {},
  args: {
    inset: false,
  },
} satisfies Meta<typeof NeuCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neu: Story = {
  args: {
    children: (
      <div>
        <div className="ui-text-lg">card example</div>
        <div className="ui-text-md">
          this is an example of a neumorphic card
        </div>
        <div className="ui-text-3xl ui-text-center">😊</div>
      </div>
    ),
    className: "ui-p-3",
    inset: false,
  },
};
