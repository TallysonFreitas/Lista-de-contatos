import { useSelector } from 'react-redux'
import ContatoItem from '../../components/ContatoItem'
import { SBotaoAdicionar, SContainer } from './style'
import { RootReducer } from '../../store'
import { ContatoItemType } from '../../components/ContatoItem/style'
import { useNavigate } from 'react-router-dom'

const ListaDeContatos = () => {
  const navigate = useNavigate()

  const { agenda } = useSelector((state: RootReducer) => state)
  return (
    <SContainer>
      <h1>Lista De Contatos</h1>
      {agenda.contatos.map((each: ContatoItemType) => (
        <ContatoItem
          key={each.id}
          id={each.id}
          email={each.email}
          name={each.name}
          telefone={each.telefone}
        />
      ))}
      <SBotaoAdicionar
        onClick={() => {
          navigate('/novo-contato')
        }}
      >
        +
      </SBotaoAdicionar>
    </SContainer>
  )
}

export default ListaDeContatos
