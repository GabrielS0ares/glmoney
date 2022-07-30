import React, {useContext} from 'react';
import Entradas from '../../assets/entradas.svg'
import Saidas from '../../assets/saidas.svg'
import Total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";



export function Summary(){
    const data = useContext(TransactionsContext);
    
    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Entradas} alt='entradas' />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saidas} alt='saidas' />
                </header>
                <strong> - R$ 300,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={Total} alt='total' />
                </header>
                <strong>R$ 700,00</strong>
            </div>
        </Container>
    )
}