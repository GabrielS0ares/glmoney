import React, {useContext} from 'react';
import Entradas from '../../assets/entradas.svg'
import Saidas from '../../assets/saidas.svg'
import Total from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";



export function Summary(){
    const { transactions } = useContext(TransactionsContext);

    //CASO DE FAZER CALCULO POR CALCULO DAS OPERACOES
    //const totalDeposits = transactions.reduce((acc, transaction) => {
    //    if (transaction.type === 'deposit') {
    //        return acc + transaction.amount 
    //    }

    //    return acc;
    //}, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total:0
    })

    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Entradas} alt='entradas' />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saidas} alt='saidas' />
                </header>
                <strong> - 
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={Total} alt='total' />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}