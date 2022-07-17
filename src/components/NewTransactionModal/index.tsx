import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import { Container, TransactionsTypeContainer, RadioBox } from './styles';
import { useState } from 'react';
 


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const [type, setType] = useState('deposit')


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
                <RadioBox
                    type='button'
                    onClick={() => {setType('deposit'); }} //Como a funcao é apenas para definir um valor para o estado usamos umas arrow function para determinar o calor la
                    isActive={type === 'deposit'}
                >
                    <img src={entradas} alt="entradas"></img>
                    <span>Entradas</span>
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                >
                    <img src={saidas} alt="saidas"></img>
                    <span>Saídas</span>
                </RadioBox>
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