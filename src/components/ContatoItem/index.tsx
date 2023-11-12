import {
  CloseButton,
  ContainerContatoItem,
  ContatoItemType,
  EditButton,
  Name
} from './style'

const ContatoItem = ({ name, email, telefone }: ContatoItemType) => {
  return (
    <ContainerContatoItem>
      <EditButton>Editar</EditButton>
      <Name>{name}</Name>
      <p>{email}</p>
      <p>{telefone}</p>
      <CloseButton>X</CloseButton>
    </ContainerContatoItem>
  )
}

export default ContatoItem
