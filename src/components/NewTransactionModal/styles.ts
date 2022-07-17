import styled from "styled-components";
import { darken, transparentize } from 'polished' //importando um helper do polished para usar a manipulacao de cor

export const Container = styled.form`

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;
            font-weight: 600;

            transition: .2;

            &:hover {
                filter: brightness(0.9);
            }
        }
`

export const TransactionsTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    ActiveColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
        ? transparentize(0.8, colors[props.ActiveColor])
        : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color .2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}; //usando o funcao darken, vamos chamar ela com uma interpolicao e vamos colocar 2 paramentrossendo eles valor que determinar o quento sera escurecido e o segundo que é qual a cor que será escurecida
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`