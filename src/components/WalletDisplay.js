import styled from "styled-components";

export default function WalletDisplay() {
  function checkInfos() {
    return <NoData>Não há registros de entrada ou saída</NoData>;
  }

  return <Content>{checkInfos()}</Content>;
}

const Content = styled.div`
  width: 100%;
  height: 446px;

  background: #ffffff;
  border-radius: 5px;

  margin-bottom: 13px;
`;

const NoData = styled.h1`
  width: 100%;
  height: 100%;
  word-wrap: break-word;

  padding: 0 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  color: #868686;
`;
