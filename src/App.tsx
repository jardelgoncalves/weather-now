import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { HomePage } from 'pages/Home'
import './styles/global.scss'

const client = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={client}>
      <HomePage />
    </QueryClientProvider>
  )
}

export default App
