import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/UserContext";

export default function CashOperationPage() {
  const { operation } = useParams();
  const { data } = useContext(UserContext);

  const [invalidPage, setInvalidPage] = useState(false);
  const [pageInfos, setPageInfos] = useState({});

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

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
        setAmount(location.state.value);
        setDescription(location.state.description);
        break;
      case "edit_cash-out":
        setPageInfos({
          pageTittle: "Editar saída",
          buttonTittle: "Atualizar saída",
        });
        setAmount(location.state.value);
        setDescription(location.state.description);
        break;
      default:
        setInvalidPage(true);
    }
  }, [operation]);

  if (invalidPage) {
    return (
      <Content>
        <h1>Invalid operation</h1>
      </Content>
    );
  }

  function redirector(e) {
    e.preventDefault();

    switch (operation) {
      case "cash-in":
      case "cash-out":
        postNewOperation();
        break;
      case "edit_cash-in":
        editOperation();
        break;
      case "edit_cash-out":
        editOperation();
        break;
    }
  }

  async function postNewOperation() {
    const value =
      operation === "cash-in"
        ? parseFloat(Math.abs(amount))
        : parseFloat(Math.abs(amount)) * -1;

    const body = {
      value: value,
      description: description,
    };

    try {
      await axios.post("http://localhost:5001/home", body, data.config);

      navigate("/home");
    } catch (err) {
      alert(err.response.data);
    }
  }

  async function editOperation() {
    const value =
      operation === "edit_cash-in"
        ? parseFloat(Math.abs(amount))
        : parseFloat(Math.abs(amount)) * -1;

    const body = {
      value: value,
      description: description,
      index: location.state.index
    };

    try {
      await axios.put("http://localhost:5001/home", body, data.config);

      navigate("/home");
    } catch (err) {
      alert(err.response.data);
    }
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
