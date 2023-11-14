import styled from 'styled-components'

export type TypeBotao = {
  tipo: 'salvar' | 'cancelar'
}

export const EditaCard = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  border-radius: 24px;
  border: 1px solid #eee;
  heigth: 100px;
  z-index: 2;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  color: white;
  padding: 24px 0px;
  gap: 16px;
`

export const PreviusValue = styled.label`
  display: block;
  font-weight: bold;
`

export const InputNewValue = styled.input`
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;
  border: none;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
`

export const Botao = styled.button<TypeBotao>`
  background-color: ${(props) => (props.tipo === 'salvar' ? '#5d5' : '#f44')};
  border: none;
  padding: 4px 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
`
