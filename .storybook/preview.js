export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'weather',
    values: [
      {
        name: 'weather',
        value: '#f1f1f1',
      },
    ],
  },
}
