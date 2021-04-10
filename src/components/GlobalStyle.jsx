import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    body {
        background:#f5f9ff;
    }

    h1 {
        color: #2b2b2a;
    }
    ::-webkit-scrollbar {
        width: 2px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
    }
`;

export default GlobalStyle;
