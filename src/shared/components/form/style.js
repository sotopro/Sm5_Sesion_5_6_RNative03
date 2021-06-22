import styled from "styled-components";

const Form = styled.form`
    margin: 0 auto;
    width: 50%;
    min-width: 400px;
    max-width: 800px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.borderColor};
    padding-top: 0;
    padding-bottom: 0px;
    color: ${(props) => props.theme.primaryColor};
    background: ${(props) => props.theme.secondaryColor};
;
`

const Title = styled.h2`
    margin-top: 40px;
    margin-bottom: 70px;
    font-size: 16px;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
`

const Input = styled.input`
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.borderColor};
`

const Button = styled.button`
    font-size: 15px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
`


export  {
    Form,
    Title,
    Input,
    Button
}