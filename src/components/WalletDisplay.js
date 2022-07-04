import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

import UserContext from "../contexts/UserContext";
import WalletItem from "./WalletItem";

export default function WalletDisplay() {
  const { data } = useContext(UserContext);
  const [walletStatement, setWalletStatement] = useState([]);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    getStatement();
  }, [reload]);

  async function getStatement() {
    try {
      const response = await axios.get(
        "http://localhost:5001/home",
        data.config
      );
      setWalletStatement(response.data);
    } catch (err) {
      alert(err.response.data);
    }
  }

  function totalValue(arrObj) {
    let sum = 0;
    arrObj.map((obj) => {
      if (obj.type === "debit") {
        sum += parseFloat(obj.value);
      } else {
        sum -= parseFloat(obj.value);
      }
    });
    const color = sum > 0 ? "#03AC00" : sum === 0 ? "#868686" : "#C70000";
    sum = sum.toFixed(2).replace(".", ",").replace("-", "");
    return <TotalValue color={color}>{sum}</TotalValue>;
  }

  function checkInfos() {
    if (walletStatement.length === 0)
      return <NoData>Não há registros de entrada ou saída</NoData>;

    return (
      <>
        <Statements>
          {walletStatement.map((obj, index) => (
            <WalletItem
              key={index}
              index={index}
              date={obj.date}
              description={obj.description}
              value={obj.value}
              type={obj.type}
              reload={reload}
              setReload={setReload}
            />
          ))}
        </Statements>
        <Total>
          <h1>SALDO</h1>
          {totalValue(walletStatement)}
        </Total>
      </>
    );
  }

  return <Content>{checkInfos()}</Content>;
}

const Content = styled.div`
  width: 100%;
  height: 446px;

  background: #ffffff;
  border-radius: 5px;

  padding: 23px 11px 10px 13px;

  margin-bottom: 13px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: "#000000";
  }
`;

const TotalValue = styled.h2`
  color: ${(props) => props.color};
`;

const Statements = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
