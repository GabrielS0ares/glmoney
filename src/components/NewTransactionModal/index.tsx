import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import { Container, TransactionsTypeContainer } from './styles';
 


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    return(
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay" //para substituis as classes do fundo do modal
        className="react-modal-content" //toda classe definida aqui vai modificar o conteudo do modal, a parte da informacoes
    >   
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
        >
            <img src={closeImg} alt="Botão fechar modal" />
        </button>

        <Container>
            <h2>cadastrar informacao</h2>

            <input
                placeholder='Titulo'
            />

            <input
                type="number"
                placeholder='Valor'
            />
            {/* Vamos criar mais um componente para estilização dos botoes, adotasse essa funcionalidade para que seja possivel separar ainda mais as estilizações sendo mais bonito visualmente  */}
            <TransactionsTypeContainer> 
                <button
                    type='button'
                >
                    <img src={entradas} alt="entradas"></img>
                    <span>Entradas</span>
                </button>

                <button
                    type='button'
                >
                    <img src={saidas} alt="saidas"></img>
                    <span>Saídas</span>
                </button>
            </TransactionsTypeContainer>

            <input
                placeholder='Categoria'
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>
    );
}