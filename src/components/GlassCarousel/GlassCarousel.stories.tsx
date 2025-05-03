import type { Meta, StoryObj } from "@storybook/react";
import { GlassCarousel, Slide } from "./GlassCarousel";

// TODO: you want to set the height and width statically, to ensure that your carousel does not change size between slides
const demoSlides: Slide[] = [
  {
    slideContent: (
      <div className="ui-p-3">
        <div>Slide 1</div>
        <div>this is a slide description for slide 1</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide1.png" },
  },
  {
    slideContent: (
      <div className="ui-p-3">
        <div>Slide 2</div>
        <div>this is a slide description for slide 2</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide2.png" },
  },
  {
    slideContent: (
      <div className="ui-p-3">
        <div>Slide 3</div>
        <div>this is a slide description for slide 3</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide3.png" },
  },
];

const meta = {
  component: GlassCarousel,
  argTypes: {},
  args: {},
} satisfies Meta<typeof GlassCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    slides: demoSlides,
    // indicators: {
    //   on: <FaHeart />,
    //   off: <FaRegHeart />,
    // },
    // classNames: {
    //   card: "ui-text-pink-500",
    //   indicator: "ui-text-pink-500",
    //   indicators: "ui-gap-4",
    //   navButtons: "ui-text-pink-500",
    // },
  },
};

// slideContent: (
//       <div>
//         <div>Slide 2</div>
//         <div className="ui-flex ui-gap-2">
//           {["react", "nextjs", "tailwindcss"].map((tag, i) => {
//             return (
//               <div
//                 className="ui-border ui-border-slate-800 ui-text-slate-800 ui-rounded-full ui-px-1 ui-text-sm ui-pointer-events-none ui-select-none"
//                 key={i}
//               >
//                 {"#" + tag}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     ),
