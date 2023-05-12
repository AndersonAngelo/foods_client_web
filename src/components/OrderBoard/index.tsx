import { Board, OrdersContainer } from "./styles";

export function OrderBoard() {
  return (
    <Board>
      <header>
        <span>🕓</span>
        <strong>Fila de espera</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type="button">
          <strong>mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>

  )
}