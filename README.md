# @marskat/skeui

SkeUi - A React Component Library for Skeuomorphic Aesthetics by marskat

[![npm](https://img.shields.io/npm/v/@marskat/skeui)](https://www.npmjs.com/package/@marskat/skeui)
[![GitHub](https://img.shields.io/badge/GitHub-marskat/skeui-181717?logo=github)](https://github.com/marskat/skeui)
[![Storybook](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white)](https://glamo-theta.vercel.app/)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/@marskat/skeui)](https://bundlephobia.com/@marskat/skeui)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

> [!NOTE]
>
> ### This is a personal project and is by no means a fully comprehensive UI library, but I am adding new components all the time! If there's any specific component you would like to see included, feel free to let me know!

# Demo

Check out the [Storybook](https://glamo-theta.vercel.app/) to play with components! (Eventually I will have a more in-depth demo site available for browsing.)

# Contents

- [Get started](#get-started)
- [Components](#components)
- [About](#About)

# Get started

## Installation

1. Run `npm install @marskat/skeui`
2. Import styles `import "@marskat/skeui/skeui-library.css";`

## Usage

```typescript
import { Card } from "@marskat/skeui";
import "@marskat/skeui/skeui-library.css";

export default function Home() {
  return (
    <div className="h-lvh bg-blue-950">
      <Card className="bg-base/20">
        <div className="text-md">look at my awesome glass card! 💃</div>
      </Card>
    </div>
  );
}
```

# Components

## Button

A skeuomorphic button component.

Wrap any element in this component to render it on the button.

@property {Aesthetic} [aesthetic] - [Optional] skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`. Default is `glassmorphic`.

@property {boolean} [isDarkMode] - [Optional] Adjust the shadow blending to lower the contrast for dark modes. Default is `false`.

This type extends all standard HTML `<button>` element attributes.
(See https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)

### Example Usage

```typescript
import { Button } from "@marskat/skeui";
import "@marskat/skeui/skeui-library.css";

export default function Home() {
  return (
    <Button aesthetic="neumorphic">
      <div className="p-3 text-black bg-white">Click me</div>
    </Button>
  );
}
```

## Card

A skeuomorphic card component.

Wrap any element in this component to render it on the card.

@property {Aesthetic} [aesthetic] - [Optional] skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`. Default is `glassmorphic`.

@property {boolean} [isDarkMode] - [Optional] Adjust the shadow blending to lower the contrast for dark modes. Default is `false`.

@property {boolean} [inset] - [Optional] Whether or not the card should be inset. Default is `false`.

@property {string} [fullyRounded] - [Optional] Applies full rounding. Default is `false`.

This type extends all standard HTML `<button>` element attributes.
(See https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)

### Example Usage

```typescript
import { Card } from "@marskat/skeui";
import "@marskat/skeui/skeui-library.css";

export default function Home() {
  return (
    <Card className="p-3" aesthetic="neumorphic">
      <div>
        <div className="text-lg">card example</div>
        <div className="text-md">this is an example of a neumorphic card</div>
        <div className="text-3xl text-center">😊</div>
      </div>
    </Card>
  );
}
```

## Carousel

A carousel component.

@property {Slide[]} slides - The slides to display.

@property {Aesthetic} [aesthetic] - [Optional] skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`. Default is `glassmorphic`.

@property {{h:string, w:string}} [size] - [Optional] Size of the card in any CSS-acceptable string. This must be a static size to ensure the navigation buttons don't move when cycling through slides. Default is `{ h: '28rem', w:'24rem' }`.

@property {SlideIndicators} [indicators] - [Optional] Indicators for the pages of the carousel. Default is `{ on: <VscCircleFilled />, off: <VscCircle /> }`.

@property {SlideNavButtons} [navButtons] - [Optional] Previous and next buttons for slide navigation. Default is `{prev: <HiOutlineChevronLeft title="previous slide" />, next: <HiOutlineChevronRight title="next slide" />}`.

@property {CarouselClassnames} [classNames] - [Optional] Class name overrides for various parts of the carousel anatomy. Targets available are `card`, `indicator`, `indicators`, and `navButtons`.

@property {boolean} [isDarkMode] - [Optional] Adjust the shadow blending to lower the contrast for dark modes. Default is `false`.

### Example Usage

```typescript
import { Carousel } from "@marskat/skeui";
import "@marskat/skeui/skeui-library.css";

const demoSlides: Slide[] = [
  {
    slideContent: (
      <div className="p-3">
        <div>Slide 1</div>
        <div>this is a slide description for slide 1</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide1.png" },
  },
  {
    slideContent: (
      <div className="p-3">
        <div>Slide 2</div>
        <div>this is a slide description for slide 2</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide2.png" },
  },
  {
    slideContent: (
      <div className="p-3">
        <div>Slide 3</div>
        <div>this is a slide description for slide 3</div>
      </div>
    ),
    desktopImage: { src: "/public/DemoCarouselSlide3.png" },
  },
];

export default function Home() {
  return <Carousel slides={demoSlides} aesthetic="glassmorphic" />;
}
```

## Navigation Bar

A skeuomorphic, sticky navigation bar component.

@property {"bottom" | "left" | "top" | "right"} [placement] - Where to place the navigation bar. Default is `bottom`.

@property {Aesthetic} [aesthetic] - [Optional] skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`. Default is `glassmorphic`.

@property {boolean} [isDarkMode] - [Optional] Adjust the shadow blending to lower the contrast for dark modes. Default is `false`.

Wrap any element in this component to render it on the menu.

This type extends all standard HTML `<button>` element attributes.
(See https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)

### Example Usage

```typescript
import { NavBar } from "@marskat/skeui";
import "@marskat/skeui/skeui-library.css";

import {
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUser,
} from "react-icons/hi2";

export default function Home() {
  return (
    <NavBar>
      <>
        <button title="home">
          <HiOutlineHome />
        </button>
        <button title="about">
          <HiOutlineUser />
        </button>
        <button title="blog">
          <HiOutlineNewspaper />
        </button>
        <button title="settings">
          <HiOutlineCog6Tooth />
        </button>
      </>
    </NavBar>
  );
}
```

## Toggle

A skeuomorphic toggle component.

@property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`. Default is `glassmorphic`.

@property {boolean} [isOn] - [Optional] Controls the toggle's on/off position. Default is `false`.

@property {React.Dispatch<React.SetStateAction<boolean>>} [setIsOn] - [Optional] The setState function to control isOn. No default behavior.

@property {React.ReactNode} [thumb] - [Optional] The thumb component. Default is `<FaCircle />`.

@property {ToggleClassnames} [classNames] - [Optional] Class name overrides for parts of the toggle anatomy. Targets available are `thumb` and `track`.

This type extends all standard HTML `<button>` element attributes.

@see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button

### Example Usage

```typescript
import { NavBar } from "@marskat/skeui";
import "@marskat/skeui/skeui-library.css";

export default function Home() {
  const [isOn, setIsOn] = React.useState(false);
  return <Toggle isOn={isOn} setIsOn={setIsOn} />;
}
```

# About

## What's skeuomorphism? What's glassmorphism? What's neumorphism?

Essentially, it's when the thing looks like the thing.

Your computer's recycle bin is shaped like a recycle bin, your file explorer is shaped like a folder, your save icon is shaped like a floppy disk (_whatever that is..._).

**Glassmorphism** and **neumorphism** are both modern UI design styles that have seen a rise in popularity over the last few years. Glassmorphism is "_characterized by panels with a blurred translucency effect over background elements, mimicking frosted glass._" [[1]](https://en.wiktionary.org/wiki/glassmorphism) Neumorphism is "_commonly identified by a soft and light look (for which it is sometimes referred to as soft UI) with elements that appear to protrude from or dent into the background rather than float on top of it._" [[2]](https://en.wikipedia.org/wiki/Neumorphism) Both of these design styles are offshoots of skeuomorphism, which is the implementation of "_interface objects that mimic their real-world counterparts in how they appear and/or how the user can interact with them._" [[3]](https://www.interaction-design.org/literature/topics/skeuomorphism?srsltid=AfmBOorEpr6vzpMfCrIckqfNDVr6PyhonAColy1DuEb3lGa8YVlJS9-Q)

Glassmorphism is the idea that "hey, wouldn't it look really cool if our interface looked like it was made of glass?" And neumorphism is the idea that "hey, it would be so sick if it looked like our UI was _popping_ out of the page?"

## Why should I care?

Glassmorphism can be tough to implement, especially for those who are not design-minded. And neumorphism is notoriously tricky to implement. You can't just slap a shadow on there and call it a day. Don't get me wrong - adding shadows can look good, but it doesn't _pop_ the way neumorphism does. With Glamo, the hard work is taken care of for you, and you have classy, expensive-looking components at your fingertips.

### References

[[1] - Wiktionary](https://en.wiktionary.org/wiki/glassmorphism)

[[2] - Wikipedia](https://en.wikipedia.org/wiki/Neumorphism)

[[3] - Interaction Design Foundation](https://www.interaction-design.org/literature/topics/skeuomorphism?srsltid=AfmBOorEpr6vzpMfCrIckqfNDVr6PyhonAColy1DuEb3lGa8YVlJS9-Q)
