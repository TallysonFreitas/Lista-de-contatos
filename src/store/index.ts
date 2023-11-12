import { configureStore } from '@reduxjs/toolkit'
import contatoSlice from './reducers/contato'

const store = configureStore({
  reducer: {
    agenda: contatoSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
