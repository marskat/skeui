import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, Slide } from "./Carousel";

// TODO: you want to set the height and width statically, to ensure that your carousel does not change size between slides
const demoSlides: Slide[] = [
  {
    slideContent: (
      <div className="skeui-p-3">
        <div>Slide 1</div>
        <div>this is a slide description for slide 1</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide1.png" },
  },
  {
    slideContent: (
      <div className="skeui-p-3">
        <div>Slide 2</div>
        <div>this is a slide description for slide 2</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide2.png" },
  },
  {
    slideContent: (
      <div className="skeui-p-3">
        <div>Slide 3</div>
        <div>this is a slide description for slide 3</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide3.png" },
  },
];
const aestheticOptions = ["glassmorphic", "neumorphic"] as const;

const meta = {
  component: Carousel,
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
    isDarkMode: true,
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glassmorphic: Story = {
  args: {
    slides: demoSlides,
    aesthetic: "glassmorphic",
    classNames: {
      indicators: "skeui-text-slate-400",
      navButtons: "skeui-text-slate-400",
      card: "skeui-text-slate-400",
    },
  },
};
export const Neumorphic: Story = {
  args: {
    slides: demoSlides,
    aesthetic: "neumorphic",
    classNames: {
      indicators: "skeui-text-slate-400",
      navButtons: "skeui-text-slate-400",
      card: "skeui-text-slate-400",
    },
  },
};
