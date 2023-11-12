import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContatoItemType } from '../../components/ContatoItem/style'

const initialState = {
  contatos: [
    {
      name: 'Tallyson Freitas',
      email: 'Tallyson.Freitas@gmail.com',
      telefone: 230000000
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatoSlice',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ContatoItemType>) => {
      state.contatos = [...state.contatos, action.payload]
    }
  }
})

export default contatoSlice.reducer
export const { adicionar } = contatoSlice.actions