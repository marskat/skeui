import type { Meta, StoryObj } from "@storybook/react";
import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUser,
} from "react-icons/hi2";
import { NavBar } from "./NavBar";

const meta = {
  component: NavBar,
  argTypes: {},
  args: {
    placement: "bottom",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// const handleClick = (section: string) => {
//   if (section === "blog") {
//     // TO DO: enable when blog is ready
//     // router.push("/blog/");
//     return;
//   } else {
//     (window as Window).location = "#" + section;
//   }
//   // setPlayAboutAnimation(true);
//   // setPlayContactAnimation(true);
// };

export const Primary: Story = {
  args: {
    className: "ui-text-slate-500",
    children: (
      <>
        <button
          className="ui-btn-nav"
          title="home"
          //   onClick={() => handleClick("home")}
        >
          <HiOutlineHome />
        </button>
        <button
          className="ui-btn-nav"
          title="about"
          //   onClick={() => handleClick("about")}
        >
          <HiOutlineUser />
        </button>
        <button
          className="btn-nav-disabled"
          title="feature available soon :)"
          //   onClick={() => handleClick("blog")}
        >
          <HiOutlineNewspaper />
        </button>
        <button
          className="ui-btn-nav"
          title="settings"
          //   onClick={() => setShowSettings(!showSettings)}
        >
          <HiOutlineCog6Tooth />
        </button>
      </>
    ),
  },
};
