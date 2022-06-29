import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  function signup() {
    return;
  }

  return (
    <Content>
      <h1>MyWallet</h1>
      <form onSubmit={signup}>
      <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to={"/"}>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

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

  p{
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