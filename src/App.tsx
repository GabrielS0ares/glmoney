import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root') //apenas para acessibilidade sendo assim quando o modal for executado ele vai referenciar o nosso App  

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false); 

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    //usaremos o contexto definido por voltar de um ou mais componentes que queremos tenha seus dados acessados, no caso desse app vamos deixar por voltar de todos os componentes
    <TransactionsProvider> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 

      <Dashboard />

      <NewTransactionModal 
      
        isOpen={isNewTransactionModalOpen} //poderia ser qualquer nome ja que o foco e pegar apenas o valor
        onRequestClose={handleCloseNewTransactionModal} //poderia ser qualquer nome ja que o foco e pegar apenas o valor  

      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
