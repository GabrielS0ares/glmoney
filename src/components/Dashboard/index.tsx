import { Container } from "../Dashboard/styles"
import { Summary } from "../Summary"
import { TransactionTable } from "../transactionTable"

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}