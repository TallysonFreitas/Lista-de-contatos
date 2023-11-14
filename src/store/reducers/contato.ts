import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContatoItemType } from '../../components/ContatoItem/style'

const initialState = {
  contatos: [
    {
      name: 'Tallyson Freitas',
      email: 'Tallyson.Freitas@gmail.com',
      telefone: 230000000,
      id: 1
    },
    {
      name: 'Erik Gomes',
      email: 'Erik.Gomes@gmail.com',
      telefone: 230000001,
      id: 2
    },
    {
      name: 'Fillipe Morais',
      email: 'Fillipe.Morais@gmail.com',
      telefone: 230000002,
      id: 3
    },
    {
      name: 'Eduardo Dantas',
      email: 'Eduardo.Dantas@gmail.com',
      telefone: 230000003,
      id: 4
    },
    {
      name: 'Murilo Paulino',
      email: 'murilo.paulino@gmail.com',
      telefone: 230000004,
      id: 5
    }
  ],
  editando: {
    name: '',
    email: '',
    telefone: 0,
    id: -1
  },
  criando: {
    name: '',
    email: '',
    telefone: 0,
    id: -1
  }
}

const contatoSlice = createSlice({
  name: 'contatoSlice',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ContatoItemType>) => {
      state.contatos = [...state.contatos, action.payload]
    },
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (each) => each.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<number>) => {
      const indexItem = state.contatos.findIndex(
        (each) => each.id === action.payload
      )
      if (indexItem >= 0) {
        state.editando = state.contatos[indexItem]
      }
    },
    salvar: (state, action: PayloadAction<ContatoItemType>) => {
      const IndexItem = state.contatos.findIndex(
        (each) => each.id === action.payload.id
      )
      if (IndexItem >= 0) {
        state.contatos[IndexItem] = action.payload
      }
    }
  }
})

export default contatoSlice.reducer
export const { adicionar, remover, editar, salvar } = contatoSlice.actions
