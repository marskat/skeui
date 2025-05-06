import type { Meta, StoryObj } from "@storybook/react";
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUser,
} from "react-icons/hi2";
import { NavBar } from "./NavBar";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const; // TODO: put these somewhere, quit importing them each time

const meta = {
  component: NavBar,
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
    placement: "bottom",
    aesthetic: "glassmorphic",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glassmorphic: Story = {
  args: {
    className: "skeui-text-slate-500 skeui-bg-slate-200/50",
    children: (
      <>
        <button className="skeui-btn-nav" title="home">
          <HiOutlineHome />
        </button>
        <button className="skeui-btn-nav" title="about">
          <HiOutlineUser />
        </button>
        <button className="skeui-btn-nav" title="blog">
          <HiOutlineNewspaper />
        </button>
        <button className="skeui-btn-nav" title="settings">
          <HiOutlineCog6Tooth />
        </button>
      </>
    ),
    aesthetic: "glassmorphic",
  },
};
export const Neumorphic: Story = {
  args: {
    className: "skeui-text-slate-500 skeui-bg-slate-200/50",
    children: (
      <>
        <button className="skeui-btn-nav" title="home">
          <HiOutlineHome />
        </button>
        <button className="skeui-btn-nav" title="about">
          <HiOutlineUser />
        </button>
        <button className="skeui-btn-nav" title="blog">
          <HiOutlineNewspaper />
        </button>
        <button className="skeui-btn-nav" title="settings">
          <HiOutlineCog6Tooth />
        </button>
      </>
    ),
    aesthetic: "neumorphic",
  },
};
