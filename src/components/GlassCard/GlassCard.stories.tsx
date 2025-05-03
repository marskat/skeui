import type { Meta, StoryObj } from "@storybook/react";
import { GlassCard } from "./GlassCard";

const meta = {
  component: GlassCard,
  argTypes: {},
  args: {},
} satisfies Meta<typeof GlassCard>;

export default meta;
type GlassCard = StoryObj<typeof meta>;

export const Glass: GlassCard = {
  args: {
    children: (
      <div>
        <div className="ui-text-lg">glass card example</div>
        <div className="ui-text-md">this is an example of a glass card</div>
        <div className="ui-text-3xl ui-text-center">😊</div>
      </div>
    ),
    className: "ui-p-3 ui-rounded ui-text-slate-800",
  },
};
