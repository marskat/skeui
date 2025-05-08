"use client";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Toggle } from "./Toggle";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const; // TODO: put these somewhere, quit importing them each time

const meta = {
  component: Toggle,
  argTypes: {
    aesthetic: {
      control: {
        type: "radio",
      },
      options: aestheticOptions,
      description: "Aesthetic style",
    },
  },
  args: {
    aesthetic: "glassmorphic",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glassmorphic: Story = {
  args: {
    aesthetic: "glassmorphic",
    classNames: {
      thumb: "skeui-text-slate-400",
    },
  },
  render: (args) => {
    const [isOn, setIsOn] = React.useState(false);
    return <Toggle isOn={isOn} setIsOn={setIsOn} {...args} />;
  },
};
export const Neumorphic: Story = {
  args: {
    aesthetic: "neumorphic",
    classNames: {
      thumb: "skeui-text-slate-400",
    },
  },
  render: (args) => {
    const [isOn, setIsOn] = React.useState(false);
    return <Toggle isOn={isOn} setIsOn={setIsOn} {...args} />;
  },
};
