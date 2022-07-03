import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    return;
  }

  return (
    <Content>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="on"
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to={"/signup"}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  h1 {
    font-family: "Saira Stencil One";
    font-size: 32px;
    line-height: 50px;

    color: #ffffff;
    margin-bottom: 24px;
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
