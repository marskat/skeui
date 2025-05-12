"use client";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { SearchBar } from "./SearchBar";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const; // TODO: put these somewhere, quit importing them each time

const meta = {
  component: SearchBar,
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
    isDarkMode: true,
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glassmorphic: Story = {
  args: {
    aesthetic: "glassmorphic",
    isDarkMode: true,
    classNames: {
      input: "skeui-text-slate-300",
    },
    className: "skeui-rounded-full",
  },
  render: (args) => {
    const [search, setSearch] = React.useState("");
    useEffect(() => {
      console.log(search);
    }, [search]);
    return <SearchBar setSearch={setSearch} {...args} />;
  },
};
export const Neumorphic: Story = {
  args: {
    aesthetic: "neumorphic",
    isDarkMode: true,
    inset: false,
    classNames: {
      input: "skeui-text-slate-400",
    },
  },
  render: (args) => {
    const [search, setSearch] = React.useState("");
    useEffect(() => {
      console.log(search);
    }, [search]);
    return <SearchBar setSearch={setSearch} {...args} />;
  },
};
