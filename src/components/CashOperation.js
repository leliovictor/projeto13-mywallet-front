import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CashOperation() {
  const { operation } = useParams();

  const [invalidPage, setInvalidPage] = useState(false);
  const [pageInfos, setPageInfos] = useState({});

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    switch (operation) {
      case "cash-in":
        setPageInfos({
          pageTittle: "Nova entrada",
          buttonTittle: "Salvar entrada",
        });
        break;
      case "cash-out":
        setPageInfos({
          pageTittle: "Nova saída",
          buttonTittle: "Salvar saída",
        });
        break;
      case "edit_cash-in":
        setPageInfos({
          pageTittle: "Editar entrada",
          buttonTittle: "Atualizar entrada",
        });
        break;
      case "edit_cash-out":
        setPageInfos({
          pageTittle: "Editar saída",
          buttonTittle: "Atualizar saída",
        });
        break;
      default:
        setInvalidPage(true);
    }
  }, []);

  if(invalidPage) {
    return (
      <Content>
        <h1>Invalid operation</h1>
      </Content>
    );
  }

  function redirector() {
    navigate("/home");
  }

  return (
    <Content>
      <h1>{pageInfos.pageTittle}</h1>
      <form onSubmit={redirector}>
        <Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{pageInfos.buttonTittle}</button>
      </form>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #ffffff;
    margin-bottom: 40px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 36px;
  }

  button {
    width: 100%;
    height: 46px;

    background: #a328d6;
    border-radius: 5px;
    border: none;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }

  p {
    width: 100%;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  background: #ffffff;
  border-radius: 5px;

  margin-bottom: 13px;
  border: none;

  font-size: 20px;
  line-height: 23px;

  padding-left: 15px;

  ::placeholder {
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #000000;
  }
`;
