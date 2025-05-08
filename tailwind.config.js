/** @type {import('tailwindcss').Config} */
export default {
  important: ".skeui",
  prefix: "skeui-",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        leftSwipeExit: {
          from: {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          to: {
            transform: "translateX(-100%)",
            opacity: "50%",
          },
        },
        leftSwipeEnter: {
          from: {
            transform: "translateX(100%)",
            opacity: "0%",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "100%",
          },
        },
        rightSwipeEnter: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0%",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "100%",
          },
        },
        rightSwipeExit: {
          from: {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          to: {
            transform: "translateX(100%)",
            opacity: "50%",
          },
        },
        toggleright: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        toggleleft: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },

      animation: {
        leftSwipeExit: "leftSwipeExit 0.2s linear forwards",
        leftSwipeEnter: "leftSwipeEnter 0.1s 0.1s linear forwards",
        rightSwipeEnter: "rightSwipeEnter 0.1s 0.1s linear forwards",
        rightSwipeExit: "rightSwipeExit 0.2s linear forwards",
        toggleToRight: "toggleright 0.1s linear forwards",
        toggleToLeft: "toggleleft 0.1s linear forwards",
      },
    },
  },
};
