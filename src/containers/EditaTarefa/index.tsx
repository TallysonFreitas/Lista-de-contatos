import ListaDeContatos from '../ListaDeContatos'
import {
  Container,
  ContainerBlur,
  EditaCard,
  InputNewValue,
  PreviusValue
} from './style'
import { useState } from 'react'

const EditaTarefa = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState()

  return (
    <Container>
      <EditaCard>
        <h2>Editar Contato</h2>
        <div>
          <PreviusValue>nome</PreviusValue>
          <InputNewValue />
        </div>
        <div>
          <PreviusValue>email</PreviusValue>
          <InputNewValue />
        </div>
        <div>
          <PreviusValue>telefone</PreviusValue>
          <InputNewValue />
        </div>
      </EditaCard>
      <ContainerBlur />
      <ListaDeContatos />
    </Container>
  )
}

export default EditaTarefa
