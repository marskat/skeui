import type { Meta, StoryObj } from "@storybook/react";
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUser,
} from "react-icons/hi2";
import { GlassNavBar } from "./GlassNavBar";

const meta = {
  component: GlassNavBar,
  argTypes: {},
  args: {
    placement: "bottom",
  },
} satisfies Meta<typeof GlassNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
  },
};
