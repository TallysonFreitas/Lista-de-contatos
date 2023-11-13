import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { SContainer } from './style'
import EditaTarefa from './containers/EditaTarefa'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ListaDeContatos />
  },
  {
    path: '/editar',
    element: <EditaTarefa />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <SContainer>
        <RouterProvider router={rotas} />
      </SContainer>
    </>
  )
}

export default App
