import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
        background: ${props => props.theme.colors.primary};
    }
    *, button, input{
        background: none;
        border: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

`; 