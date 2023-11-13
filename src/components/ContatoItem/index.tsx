import { useDispatch } from 'react-redux'
import {
  CloseButton,
  ContainerContatoItem,
  ContatoItemType,
  EditButton,
  Name
} from './style'
import { editar, remover } from '../../store/reducers/contato'
import { Link } from 'react-router-dom'

const ContatoItem = ({ name, email, telefone, id }: ContatoItemType) => {
  const dispatch = useDispatch()

  return (
    <ContainerContatoItem>
      <EditButton
        as={Link}
        to={'/editar'}
        onClick={() => {
          dispatch(editar(id))
        }}
      >
        Editar
      </EditButton>
      <Name>{name}</Name>
      <p>{email}</p>
      <p>{telefone}</p>
      <CloseButton
        onClick={() => {
          dispatch(remover(id))
        }}
      >
        X
      </CloseButton>
    </ContainerContatoItem>
  )
}

export default ContatoItem
