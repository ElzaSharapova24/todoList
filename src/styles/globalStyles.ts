import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #e9ecef;
        color: #333;
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: inherit;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
    }
`;

export default GlobalStyle;