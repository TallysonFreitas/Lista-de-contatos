import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Roboto, sans-serif;
}
`

export const SContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
`

export const ContainerBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const ContainerPrincipal = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`

export default EstiloGlobal
