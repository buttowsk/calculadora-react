import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: #B4E4FF;
  border-radius: 16px;
  color: #03001C;
  flex-basis: 20%;
  font-size: 22px;
  height: 70px;

  &:hover {
    background-color: #7B8FA1;
    color: #DEFCF9;
  }

  &:last-child {
    background-color: #95BDFF;
    color: #03001C;
    flex-basis: 20%;
    font-size: 22px;
    height: 70px;
  }

  &: last-child: hover {
    background-color: #7B8FA1;
    color: #DEFCF9;
  }
`
