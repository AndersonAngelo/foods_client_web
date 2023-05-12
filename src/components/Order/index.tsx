import { OrderBoard } from "../OrderBoard";
import { Container } from "./style";

export function Orders() {
  return (
    <Container>
      <OrderBoard />
      <OrderBoard />
      <OrderBoard />
    </Container>
  )
}