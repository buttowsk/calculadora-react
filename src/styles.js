import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.5);
  flex-basis: 450px;
  height: 580px;
  padding: 15px 35px;
  border-radius: 10px;
  background-color: transparent;
  backdrop-filter: blur(15px);
`

export const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 0;
`
