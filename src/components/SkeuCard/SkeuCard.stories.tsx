import type { Meta, StoryObj } from "@storybook/react";
import { SkeuCard } from "./SkeuCard";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const;
const meta = {
  component: SkeuCard,
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
    inset: false,
  },
} satisfies Meta<typeof SkeuCard>;

export default meta;
type SkeuCard = StoryObj<typeof meta>;

export const Glassmorphic: SkeuCard = {
  args: {
    children: (
      <div>
        <div className="ui-text-lg">glassmorphic card example</div>
        <div className="ui-text-md">
          this is an example of a glassmorphic card
        </div>
        <div className="ui-text-3xl ui-text-center">😊</div>
      </div>
    ),
    className: "ui-p-3 ui-rounded ui-text-slate-800",
    aesthetic: "glassmorphic",
  },
};
export const Neumorphic: SkeuCard = {
  args: {
    children: (
      <div>
        <div className="ui-text-lg">neumorphic card example</div>
        <div className="ui-text-md">
          this is an example of a neumorphic card
        </div>
        <div className="ui-text-3xl ui-text-center">😊</div>
      </div>
    ),
    className: "ui-p-3 ui-rounded ui-text-slate-800",
    aesthetic: "neumorphic",
  },
};
