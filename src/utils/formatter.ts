export const formatter = {
  lastUpdated: (date?: string | number) =>
    new Date(date || Date.now()).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    }),
}
