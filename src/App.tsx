import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { SContainer } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <SContainer>
        <ListaDeContatos />
      </SContainer>
    </>
  )
}

export default App
