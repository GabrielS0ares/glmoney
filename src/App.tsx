import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
      
        isOpen={isNewTransactionModalOpen} //poderia ser qualquer nome ja que o foco e pegar apenas o valor
        onRequestClose={handleCloseNewTransactionModal} //poderia ser qualquer nome ja que o foco e pegar apenas o valor  

      />

      <GlobalStyle />
    </>
  );
}

export default App;
