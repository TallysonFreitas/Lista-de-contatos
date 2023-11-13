import { useSelector } from 'react-redux'
import ListaDeContatos from '../ListaDeContatos'
import {
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
          <PreviusValue>nome</PreviusValue>
          <InputNewValue
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div>
          <PreviusValue>email</PreviusValue>
          <InputNewValue
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <PreviusValue>telefone</PreviusValue>
          <InputNewValue type="number" value={telefone} />
        </div>
      </EditaCard>
      <ContainerBlur />
      <ListaDeContatos />
    </Container>
  )
}

export default EditaTarefa
