import { useDispatch } from 'react-redux'
import {
  CloseButton,
  ContainerContatoItem,
  ContatoItemType,
  EditButton,
  Name
} from './style'
import { remover } from '../../store/reducers/contato'

const ContatoItem = ({ name, email, telefone }: ContatoItemType) => {
  const dispatch = useDispatch()

  return (
    <ContainerContatoItem>
      <EditButton>Editar</EditButton>
      <Name>{name}</Name>
      <p>{email}</p>
      <p>{telefone}</p>
      <CloseButton
        onClick={() => {
          dispatch(remover(telefone))
        }}
      >
        X
      </CloseButton>
    </ContainerContatoItem>
  )
}

export default ContatoItem
