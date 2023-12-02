import styled from "styled-components";


const Button = styled.button`
    border-radius:1rem;
    cursor:pointer;
    background-color:#000;
    color:${props=> props.$buttonColor || 'white'};
    border: 1px solid ${props=> props.$buttonColor || 'white'};
    padding: 7px 17px ; 
`

export default Button;