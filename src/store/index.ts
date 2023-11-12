import { configureStore } from '@reduxjs/toolkit'
import contatoSlice from './reducers/contato'

const store = configureStore({
  reducer: {
    contato: contatoSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
