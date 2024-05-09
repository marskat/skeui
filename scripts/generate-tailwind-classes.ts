// scripts/generate-tailwind-classes.ts
import { writeFileSync } from "fs";

const directions = ["bl", "br", "tr", "tl", "b", "t", "l", "r"] as const;
const values = [2, 4, 6, 8, 10, 12];

let content = "";
for (const dir of directions) {
  for (const val of values) {
    content += `ui-rounded-${dir}-[${val}rem] before:ui-rounded-${dir}-[${val}rem]\n`;
  }
}

writeFileSync("src/tailwind-keep-classes.txt", content);
