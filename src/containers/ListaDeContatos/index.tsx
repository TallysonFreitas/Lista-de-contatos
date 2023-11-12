import ContatoItem from '../../components/ContatoItem'
import { SContainer } from './style'

const ListaDeContatos = () => {
  return (
    <SContainer>
      <h1>Lista De Contatos</h1>
      <ContatoItem
        email={'tallyson@Freitas.com.br'}
        name="Tallyson Vieira Freitas"
        telefone={902530000}
      />
    </SContainer>
  )
}

export default ListaDeContatos
