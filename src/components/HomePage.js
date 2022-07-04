import styled from "styled-components";
import CashInOutButton from "./CashInOutButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../contexts/UserContext";
import WalletDisplay from "./WalletDisplay";

export default function HomePage() {
  const { data } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <User>
        <h1>Olá, {data.name}</h1>
        <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
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

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  color: #ffffff;
`;

const CashButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
