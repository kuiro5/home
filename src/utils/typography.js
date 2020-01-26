import Typography from 'typography'

const fontFamilies = [
  'Consolas',
  'Liberation Mono',
  'Menlo',
  'Courier',
  'monospace',
]

const typography = new Typography({
  baseFontSize: '14px',
  headerFontFamily: fontFamilies,
  headerColor: 'rgba(0, 0, 0, .90)',
  bodyFontFamily: fontFamilies,
  bodyColor: 'rgba(0, 0, 0, .90)',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

const { rhythm, scale } = typography
export { rhythm, scale, typography as default }

