import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles"



export function TransactionTable(){


    const {transactions} = useContext(TransactionsContext);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => ( 
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}> {/*Formatar moeda com Browser*/}
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td> {/*Formatar Data com Browser*/}
                            {new Intl.DateTimeFormat('pt-BR').format(  
                                new Date(transaction.createdAt)
                            )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}