import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const ContainerBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(40px);
  z-index: 1;
`

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
`

export const PreviusValue = styled.p``

export const InputNewValue = styled.input``
