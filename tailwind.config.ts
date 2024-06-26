import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brownish: {
          0: "#f7f4f2",
          10: "#e8ddd9",
          20: "#D6C2B8",
          30: "#C0A091",
          40: "#",
          50: "#898989",
          60: "#6B6B6B",
          70: "#565656",
          80: "#404040", // bg-secondary
          90: "#2B2B2B",
          100: "#151515", // bg-primary
        },
        grayish: {
          10: "#EDF7FF",
          20: "#D7EAFF",
          30: "#B9DDFF",
          40: "#88C8FF",
          50: "#50A9FF",
          60: "#2885FF",
          70: "#0C61FF",
          80: "#0A4DEB",
          90: "#0F3EBE",
          100: "#133A95",
        },
        greenish: {
          5: "#FFEEEB",
          10: "#FFEDEA",
          20: "#FFDAD6",
          30: "#FFB4AB",
          40: "#FE897D",
          50: "#FF5549",
          60: "#DE3830",
          65: "#DB201F",
          70: "#BA1B1A",
          80: "#920109",
          90: "#690105",
          100: "#410002",
        },
        orangeish: {
          10: "#EBFFE6",
          15: "#E2FFDB",
          20: "#C7FEC5",
          30: "#77DD82",
          40: "#5ABF69",
          50: "#3FA452",
          55: "#008A33",
          60: "#208939",
          70: "#006D28",
          80: "#00531C",
          90: "#013911",
          100: "#002107",
          110: "#82CF8D",
        },
        yellowish: {
          5: "#FFF1D1",
          10: "#FFEFCA",
          20: "#FEE4AE",
          30: "#FAC319",
          40: "#E4A507",
          50: "#BC8906",
          60: "#A26802",
          70: "#7F5408",
          80: "#5E4101",
          90: "#413107",
          100: "#2C1C08",
          110: "#C38D04",
        },
        purpleish: {
          10: "#F3F0FF",
          20: "#DFD8FD",
          30: "#B8ACF6",
          40: "#9F8FEF",
          50: "#8F7EE7",
          60: "#8270DB",
          70: "#6E5DC6",
          80: "#5E4DB2",
          90: "#352C63",
          100: "#231C3F",
          110: "#5642BD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
