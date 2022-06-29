import styled from "styled-components";

export function CashIn() {
  return (
    <Content>
      <ion-icon name="add-circle-outline"></ion-icon>
      <p>Nova entrada</p>
    </Content>
  );
}

export function CashOut() {
  return (
    <Content>
      <ion-icon name="remove-circle-outline"></ion-icon>
      <p>Nova saída</p>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  width: 48%;
  height: 114px;
  padding: 10px;

  background: #a328d6;
  border-radius: 5px;

  color: #ffffff;

  font-size: 25px;

  p {
    word-wrap: break-word;
    max-width: 70px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
`;
