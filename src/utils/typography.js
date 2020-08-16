import Typography from "typography";

const fontFamilies = ["IBM Plex Mono", "monospace"];

const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: fontFamilies,
  headerColor: "rgba(0, 0, 0, .90)",
  bodyFontFamily: fontFamilies,
  bodyColor: "rgba(0, 0, 0, .90)",
  googleFonts: [
    {
      name: fontFamilies[0],
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  overrideStyles: ({ rhythm }) => ({
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
