import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import { Container, TransactionsTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

 


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const [ title, setTitle ] = useState('');
    const [ value, setValue ] = useState(0);
    const [ category, setCategory ] = useState('');

    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent){ //toda funcao que começa com handle vem da funcão exercida pelo usuarios
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data)
    }


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

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>cadastrar informacao</h2>

            <input
                placeholder='Titulo'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder='Valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
            />
            {/* Vamos criar mais um componente para estilização dos botoes, adotasse essa funcionalidade para que seja possivel separar ainda mais as estilizações sendo mais bonito visualmente  */}
            <TransactionsTypeContainer> 
                <RadioBox
                    type='button'
                    onClick={() => {setType('deposit'); }} //Como a funcao é apenas para definir um valor para o estado usamos umas arrow function para determinar o calor la
                    isActive={type === 'deposit'}
                    ActiveColor="green"
                >
                    <img src={entradas} alt="entradas"></img>
                    <span>Entradas</span>
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    ActiveColor="red"
                >
                    <img src={saidas} alt="saidas"></img>
                    <span>Saídas</span>
                </RadioBox>
            </TransactionsTypeContainer>

            <input
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>
    );
}