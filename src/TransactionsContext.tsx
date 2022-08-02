import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction { //Declarando o que será recebido dentro de um estado
    id: number;
    title: string;
    amount: number;
    type: string;
    category:string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;

}



export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]); //usando o typescrip para mostrar o estado

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
  
    },[]);

    function createTransaction(transaction : TransactionInput){
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}