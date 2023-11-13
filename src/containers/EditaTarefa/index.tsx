import { useDispatch, useSelector } from 'react-redux'
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
import { salvar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const EditaTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
            required
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
            required
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <PreviusValue>Telefone:</PreviusValue>
          <InputNewValue
            required
            type="number"
            value={telefone}
            onChange={(e) => {
              setTelefone(Number(e.target.value))
            }}
            maxLength={11}
          />
        </div>
        <ButtonContainer>
          <Botao
            tipo="salvar"
            onClick={(e) => {
              dispatch(
                salvar({
                  name: name,
                  email: email,
                  telefone: telefone,
                  id: editando.id
                })
              ),
                navigate('/'),
                e.preventDefault()
            }}
          >
            Salvar
          </Botao>
          <Botao
            onClick={() => {
              navigate('/')
            }}
            tipo="cancelar"
          >
            Cancelar
          </Botao>
        </ButtonContainer>
      </EditaCard>
      <ContainerBlur />
      <ListaDeContatos />
    </Container>
  )
}

export default EditaTarefa
