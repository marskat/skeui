import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
const aestheticOptions = ["glassmorphic", "neumorphic"] as const; // TODO: put these somewhere, quit importing them each time

const meta = {
  component: NavBar,
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
    placement: "bottom",
    aesthetic: "glassmorphic",
    isDarkMode: true,
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
          🏠
        </button>
        <button className="skeui-btn-nav" title="about">
          👤
        </button>
        <button className="skeui-btn-nav" title="blog">
          📰
        </button>
        <button className="skeui-btn-nav" title="settings">
          ⚙️
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
          🏠
        </button>
        <button className="skeui-btn-nav" title="about">
          👤
        </button>
        <button className="skeui-btn-nav" title="blog">
          📰
        </button>
        <button className="skeui-btn-nav" title="settings">
          ⚙️
        </button>
      </>
    ),
    aesthetic: "neumorphic",
  },
};
