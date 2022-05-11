export const FetchService = {
  call: async (url: string) => {
    const response = await fetch(url)
    return response.json()
  },
}
