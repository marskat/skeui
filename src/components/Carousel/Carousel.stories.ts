import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, Slide } from "./Carousel";

const demoSlides: Slide[] = [
  {
    title: "demo slide 1",
    tags: ["react", "nextjs", "tailwindcss"],
    link: "https://reading-challenge-omega.vercel.app/",
    desktopPreviewImage: "/public/DemoCarouselSlide1.png",
  },
  {
    title: "demo slide 2",
    tags: ["react", "nextjs", "tailwindcss"],
    link: "https://reading-challenge-omega.vercel.app/",
    desktopPreviewImage: "/public/DemoCarouselSlide2.png",
  },
  {
    title: "demo slide 3",
    tags: ["react", "nextjs", "tailwindcss"],
    link: "https://reading-challenge-omega.vercel.app/",
    desktopPreviewImage: "/public/DemoCarouselSlide3.png",
  },
];

const meta = {
  component: Carousel,
  argTypes: {},
  args: { neumorphic: true },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    slides: demoSlides,
  },
};
