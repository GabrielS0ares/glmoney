import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";

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

      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>cadastrar informacao</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
