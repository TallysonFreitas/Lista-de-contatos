import styled from 'styled-components'

export type ContatoItemType = {
  name: string
  email: string
  telefone: number
  id: number
}

export const ContainerContatoItem = styled.div`
  padding: 16px;
  background-color: #252525;
  width: 100%;
  color: #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 2px solid white;
  border-radius: 16px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.37);
  position: relative;
`

export const Name = styled.h3`
  font-size: 40px;
  color: white;
`

export const CloseButton = styled.button`
  content: 'X';
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 24px;
  height: 24px;
  background-color: white;
  right: 8px;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto 0;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: all ease 0.3s;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.77);

  &:hover {
    box-shadow: 2px 2px 12px rgba(255, 255, 255, 0.37);
  }
`

export const EditButton = styled(CloseButton)`
  right: auto;
  left: 8px;
  width: 60px;
  border-radius: 16px;
`
