import { createGlobalStyle } from "styled-components";  //importando o createGlobasStyle para criar um estilo global

//exportando um variavel que de nome GlobalStyle que recebe a estilização global
export const GlobalStyle = createGlobalStyle` 
    :root {
        --red: #f52b4d;
        --blue: #5429cc;
        --green: #33cc95;

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

    .react-modal-overlay {
        background: rgba(0,0,0, .5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .react-modal-content{
        width: 100%; //ele vai ocupar 100% do espaco disponivel mas vai se limitar a 576px, como definido na linha de baixo
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: .3s;

        &:hover {
        filter: brightness(0.8);
        }
    }


`

