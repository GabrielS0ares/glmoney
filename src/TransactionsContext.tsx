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

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]); //usando o typescrip para mostrar o estado

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
  
    },[])

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}