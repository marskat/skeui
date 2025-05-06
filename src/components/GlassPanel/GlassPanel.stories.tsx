import type { Meta, StoryObj } from "@storybook/react";
import { GlassPanel } from "./GlassPanel";

const roundedOptions = [
  "r-full",
  "b-full",
  "l-full",
  "t-full",
  "tl-full",
  "bl-full",
  "br-full",
  "tr-full",
  "b-md",
  "r-sm",
  "l-lg",
] as const;
const meta = {
  component: GlassPanel,
  argTypes: {
    rounded: {
      control: {
        type: "check", // multi-select
      },
      options: roundedOptions,
      description: "Border radius options (can select multiple)",
      table: {
        type: { summary: "RoundedOption | RoundedOption[]" },
        defaultValue: { summary: "r-full" },
      },
    },
  },
  args: {
    rounded: "b-full", // default value
    neumorphic: true,
  },
} satisfies Meta<typeof GlassPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div className="skeui-h-full">
        <div className="skeui-text-2xl">glass panel</div>
        <div className="skeui-text-md">
          styles can be overridden with className, but glamo comes with tasteful
          defaults! 💃
        </div>
      </div>
    ),
    className:
      "skeui-bg-[#effbf9]/20 skeui-text-black skeui-p-8 skeui-text-center",
    rounded: ["b-full", "t-full"],
    neumorphic: true,
  },
};
export const Secondary: Story = {
  args: {
    children: (
      <div>
        <div className="skeui-text-2xl">glass panel wrapped around a grid</div>
        <div className="skeui-grid skeui-grid-cols-3 skeui-gap-2 [&>div]:skeui-border [&>div]:skeui-border-slate-800 [&>div]:skeui-size-fit [&>div]:skeui-p-2 skeui-justify-items-center">
          <div>💎</div>
          <div>💎</div>
          <div>💎</div>
          <div>💎</div>
          <div>💎</div>
          <div>💎</div>
        </div>
      </div>
    ),
    className:
      "skeui-bg-[#effbf9]/20 skeui-text-black skeui-p-8 skeui-text-center",
    rounded: ["b-full", "t-full"],
    neumorphic: true,
  },
};
