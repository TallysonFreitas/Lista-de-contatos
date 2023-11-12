import { useSelector } from 'react-redux'
import ContatoItem from '../../components/ContatoItem'
import { SContainer } from './style'
import { RootReducer } from '../../store'
import { ContatoItemType } from '../../components/ContatoItem/style'

const ListaDeContatos = () => {
  const { contato } = useSelector((state: RootReducer) => state)
  return (
    <SContainer>
      <h1>Lista De Contatos</h1>
      {contato.contatos.map((each: ContatoItemType) => (
        <ContatoItem
          key={each.telefone}
          email={each.email}
          name={each.name}
          telefone={each.telefone}
        />
      ))}
    </SContainer>
  )
}

export default ListaDeContatos
