import { QueryClientProvider } from '@tanstack/react-query'
import { Home } from './components'
import { reactQueryInstance } from './infra/http/adapters'

function App() {
  return (
    <QueryClientProvider client={reactQueryInstance}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
