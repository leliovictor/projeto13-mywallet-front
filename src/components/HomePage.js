import styled from "styled-components";
import CashInOutButton from "./CashInOutButton";
import {useNavigate} from "react-router-dom";

import WalletDisplay from "./WalletDisplay";

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <>
      <User>
        <h1>Olá, Fulano</h1>
        <ion-icon name="exit-outline" onClick={()=> navigate("/")}></ion-icon>
      </User>
      <WalletDisplay />
      <CashButtons>
        <CashInOutButton button={"cash-in"} />
        <CashInOutButton button={"cash-out"} />
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

const CashButtons = styled.div`
display: flex;
justify-content: space-between;
width: 100%
`;
