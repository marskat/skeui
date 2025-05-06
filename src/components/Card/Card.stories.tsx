import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const;
const meta = {
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type SkeuCard = StoryObj<typeof meta>;

export const Glassmorphic: SkeuCard = {
  args: {
    children: (
      <div>
        <div className="skeui-text-lg">glassmorphic card example</div>
        <div className="skeui-text-md">
          this is an example of a glassmorphic card
        </div>
        <div className="skeui-text-3xl skeui-text-center">😊</div>
      </div>
    ),
    className: "skeui-p-3 skeui-rounded skeui-text-slate-800",
    aesthetic: "glassmorphic",
  },
};
export const Neumorphic: SkeuCard = {
  args: {
    children: (
      <div>
        <div className="skeui-text-lg">neumorphic card example</div>
        <div className="skeui-text-md">
          this is an example of a neumorphic card
        </div>
        <div className="skeui-text-3xl skeui-text-center">😊</div>
      </div>
    ),
    className: "skeui-p-3 skeui-rounded skeui-text-slate-800",
    aesthetic: "neumorphic",
  },
};
