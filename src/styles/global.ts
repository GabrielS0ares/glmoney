import { createGlobalStyle } from "styled-components";  //importando o createGlobasStyle para criar um estilo global

export const GlobalStyle = createGlobalStyle` //exportando um variavel que de nome GlobalStyle que recebe a estilização global
    :root {
        --red: #f52b4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #FFFFFF;

    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; 
        }

        @media (max-width: 720px){
            font-size: 87.05%; 
        }

    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button { //input, textarea, button tem suas priprias fonts, tem que forçar a alteração
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong { //são tags que vem por padrão com negrito
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] { //para tudo que estiver desabilitado
        opacity: .6;
        cursor: not-allowed; //mudar o cursos para o não clicavel
    }
`