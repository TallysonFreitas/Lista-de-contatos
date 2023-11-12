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
  height: 100vh;
`

export default EstiloGlobal
