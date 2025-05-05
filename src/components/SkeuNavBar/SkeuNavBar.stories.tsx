import type { Meta, StoryObj } from "@storybook/react";
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUser,
} from "react-icons/hi2";
import { SkeuNavBar } from "./SkeuNavBar";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const; // TODO: put these somewhere, quit importing them each time

const meta = {
  component: SkeuNavBar,
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
} satisfies Meta<typeof SkeuNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glassmorphic: Story = {
  args: {
    className: "ui-text-slate-500 ui-bg-slate-200/50",
    children: (
      <>
        <button className="ui-btn-nav" title="home">
          <HiOutlineHome />
        </button>
        <button className="ui-btn-nav" title="about">
          <HiOutlineUser />
        </button>
        <button className="ui-btn-nav" title="blog">
          <HiOutlineNewspaper />
        </button>
        <button className="ui-btn-nav" title="settings">
          <HiOutlineCog6Tooth />
        </button>
      </>
    ),
    aesthetic: "glassmorphic",
  },
};
export const Neumorphic: Story = {
  args: {
    className: "ui-text-slate-500 ui-bg-slate-200/50",
    children: (
      <>
        <button className="ui-btn-nav" title="home">
          <HiOutlineHome />
        </button>
        <button className="ui-btn-nav" title="about">
          <HiOutlineUser />
        </button>
        <button className="ui-btn-nav" title="blog">
          <HiOutlineNewspaper />
        </button>
        <button className="ui-btn-nav" title="settings">
          <HiOutlineCog6Tooth />
        </button>
      </>
    ),
    aesthetic: "neumorphic",
  },
};
