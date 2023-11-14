import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { SContainer } from './style'
import EditaContato from './containers/EditaContato'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ListaDeContatos />
  },
  {
    path: '/editar',
    element: <EditaContato tipo={'editar'} />
  },
  { path: '/novo-contato', element: <EditaContato tipo={'salvar'} /> }
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
