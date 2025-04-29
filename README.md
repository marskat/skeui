# Glamo - add some class with some glass!

> [!CAUTION]
> Glamo is still in beta - it's not quite ready yet! It is **not recommended** that you install it until the official release is ready.

## A React component library for **gla**ss**mo**rphism (and neumorphism)

[![Storybook](https://img.shields.io/badge/Storybook-gray?&style=badge&logo=storybook&logoColor=white)]()
[![Github](https://img.shields.io/badge/Github-gray?&style=badge&logo=github&logoColor=white)](https://github.com/marskat/glamo)

# Get started

## Installation

`npm install glamo`

## Usage

```typescript
import { GlassPanel } from "glamo";
import "glamo/ui-library.css";

export default function Home() {
  return (
    <div className="h-lvh bg-blue-950">
      <GlassPanel className="bg-base/20 " rounded={["b-full, t-full"]}>
        <div className="text-md">
          look at my awesome, neumorphic glass panel! 💃
        </div>
      </GlassPanel>
    </div>
  );
}
```

# About

## What's glassmorphism? What's neumorphism?

**Glassmorphism** and **neumorphism** are both modern UI design styles that have seen a rise in popularity over the last few years. Glassmorphism is "_characterized by panels with a blurred translucency effect over background elements, mimicking frosted glass._" [[1]](https://en.wiktionary.org/wiki/glassmorphism) Neumorphism is "_commonly identified by a soft and light look (for which it is sometimes referred to as soft UI) with elements that appear to protrude from or dent into the background rather than float on top of it._" [[2]](https://en.wikipedia.org/wiki/Neumorphism) Both of these design styles are offshoots of skeumorphism, which is the implementation of "_interface objects that mimic their real-world counterparts in how they appear and/or how the user can interact with them._" [[3]](https://www.interaction-design.org/literature/topics/skeuomorphism?srsltid=AfmBOorEpr6vzpMfCrIckqfNDVr6PyhonAColy1DuEb3lGa8YVlJS9-Q)

Essentially, it's when the thing looks like the thing.

Your computer's recycle bin is shaped like a recycle bin, your file explorer is shaped like a folder, your save icon is shaped like... uh... something people used to use before I was born.

Glassmorphism is the idea that "hey, wouldn't it look really cool if our interface looked like it was made of glass?" And neumorphism is the idea that "hey, it would be so sick if it looked like our UI was _popping_ out of the page?"

## Why should I care?

Glassmorphism can be tough to implement, especially for those who are not design-minded. And neumorphism is notoriously tricky to implement. You can't just slap a shadow on there and call it a day. Don't get me wrong - adding shadows can look good, but it doesn't _pop_ the way neumorphism does. With Glamo, the hard work is taken care of for you, and you have classy, expensive-looking components at your fingertips.

### References

[[1] - Wiktionary](https://en.wiktionary.org/wiki/glassmorphism)

[[2] - Wikipedia](https://en.wikipedia.org/wiki/Neumorphism)

[[3] - Interaction Design Foundation](https://www.interaction-design.org/literature/topics/skeuomorphism?srsltid=AfmBOorEpr6vzpMfCrIckqfNDVr6PyhonAColy1DuEb3lGa8YVlJS9-Q)
