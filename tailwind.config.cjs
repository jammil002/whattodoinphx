/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      title: ["Rubik Mono One"],
      subtitle: ["Montserrat Alternates"],
      text: ["Anaheim"],
    },
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeout: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadein: "fadein 800ms forwards",
        fadeout: "fadeout 500ms forwards",
      },
    },
  },
  plugins: [],
};
