import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  component: Card,
  argTypes: {},
  args: {
    neumorphic: true,
    inset: true,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div>
        <div className="ui-text-lg">card example</div>
        <div className="ui-text-md">
          this is an example of a neumorphic, inset card
        </div>
      </div>
    ),
    className: "ui-p-3",
    neumorphic: true,
    inset: false,
  },
};
