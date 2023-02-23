import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F7C8E0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    border: 1px solid black;
    flex-basis: 450px;
    height: 580px;
    padding: 15px 35px;
    border-radius: 10px;
    background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);


    @media screen and (max-width: 375px) {
        & {
            padding: 20px 15px;
            height: 580px;
            border: 0;
        }
    }

`

export const Linha = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5% 0;

    @media screen and (max-width: 320px) {
        & {
            margin 10% 0;
        }
    }

   
`