import Typography from "typography";

const fontFamilies = ["Spectral", "serif"];

const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: fontFamilies,
  headerColor: "rgba(0, 0, 0, .90)",
  headerWeight: "normal",
  bodyFontFamily: fontFamilies,
  bodyColor: "rgba(0, 0, 0, .90)",
  googleFonts: [
    {
      name: fontFamilies[0],
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  overrideStyles: ({ rhythm }) => ({
    "h1,h2,h3,h4,h5": {
      fontStyle: "italic"
    },
    img: {
      marginBottom: 0
    },
    li: {
      marginBottom: ".5rem"
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
