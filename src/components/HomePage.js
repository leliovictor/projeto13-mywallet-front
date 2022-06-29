import styled from "styled-components";
import {CashIn, CashOut} from "./CashInOutButton";

import WalletDisplay from "./WalletDisplay";

export default function HomePage() {
  return (
    <>
      <User>
        <h1>Olá, Fulano</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </User>
      <WalletDisplay />
      <CashButtons>
        <CashIn />
        <CashOut />
      </CashButtons>
    </>
  );
}

const User = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  font-size: 32px;

  h1{
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
}
  color: #ffffff;
`;

const Wallet = styled.div`
background: #FFFFFF;
border-radius: 5px;
`;

const CashButtons = styled.div`
display: flex;
justify-content: space-between;
width: 100%
`;
