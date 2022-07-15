import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void; //quando for um componente que recebe uma funcao sempre comcecar ela com on

}
export function Header({onOpenNewTransactionModal} : HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={Logo} alt="GlMoney"/>
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
} 