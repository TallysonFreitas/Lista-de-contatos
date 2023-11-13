import { useSelector } from 'react-redux'
import ListaDeContatos from '../ListaDeContatos'
import {
  Botao,
  ButtonContainer,
  Container,
  ContainerBlur,
  EditaCard,
  InputNewValue,
  PreviusValue
} from './style'
import { useState } from 'react'
import { RootReducer } from '../../store'
import { ContatoItemType } from '../../components/ContatoItem/style'

const EditaTarefa = () => {
  const editando = useSelector(
    (state: RootReducer): ContatoItemType => state.agenda.editando
  )

  const [name, setName] = useState(editando.name)
  const [email, setEmail] = useState(editando.email)
  const [telefone, setTelefone] = useState(editando.telefone)

  return (
    <Container>
      <EditaCard>
        <h2>Editar Contato</h2>
        <div>
          <PreviusValue>Nome:</PreviusValue>
          <InputNewValue
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div>
          <PreviusValue>E-mail:</PreviusValue>
          <InputNewValue
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <PreviusValue>Telefone:</PreviusValue>
          <InputNewValue type="number" value={telefone} />
        </div>
        <ButtonContainer>
          <Botao tipo="salvar">Salvar</Botao>
          <Botao tipo="cancelar">Cancelar</Botao>
        </ButtonContainer>
      </EditaCard>
      <ContainerBlur />
      <ListaDeContatos />
    </Container>
  )
}

export default EditaTarefa
