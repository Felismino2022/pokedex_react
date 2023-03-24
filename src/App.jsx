import AppRouter from "./AppRouter"
import { PokemonProvider } from "./context/PokemonProvider"

function App() {

  return (
    <div>
      <PokemonProvider>
          <AppRouter/>
      </PokemonProvider>
      
    </div>
  )
}

export default App
