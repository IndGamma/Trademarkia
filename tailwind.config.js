/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fefefe",
          "200": "#fcfcfe",
          "300": "#1d1c1d",
          "400": "#1a1a1a",
          "500": "rgba(0, 0, 0, 0.1)",
          "600": "#374151",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f1f1f1",
          "200": "#eaeaea",
        },
        black: "#000",
        gainsboro: {
          "100": "#e7e6e6",
          "200": "#e6ded6",
          "300": "#d9d9d9",
        },
        "tmo-black": "#313131",
        "tmo-blue": "#4380ec",
        "olive-black": "#3a3a3a",
        darkslategray: "#3f3f3f",
        lightgray: {
          "100": "#d4d4d4",
          "200": "#d1d1d1",
        },
        "red-1": "#ec3c3c",
        "red-2": "#f44336",
        "green-1": "#4caf50",
        goldenrod: "#ecc53c",
        forestgreen: "#52b649",
        aliceblue: {
          "100": "#eef4ff",
          "200": "#eaf1ff",
        },
        silver: "#c8c8c8",
        dimgray: {
          "100": "#636363",
          "200": "#575757",
        },
        mediumseagreen: "#41b65c",
        green: {
          "100": "#e6f7e6",
          "200": "#c0ebc0",
          "300": "#99de99",
          "400": "#73d173",
          "500": "#4dc54d",
          "600": "#128807",  // Your specific green color
        },
        chocolate: {
          "100": "#e7760e",
          "200": "#cf5c00",
        },
        seashell: "#fef7f0",
        ghostwhite: "#f8fafe",
        cornflowerblue: "#5c99ff",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        questrial: "Questrial",
      },
      borderRadius: {
        "3xs": "10px",
        "2xs": "11px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


