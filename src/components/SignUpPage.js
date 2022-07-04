import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function signup(e) {
    e.preventDefault();
    setLoading(true);

    if (checkPasswordMatch()) {
      const body = {
        name: name,
        email: email,
        password: password,
      };

      try {
        const response = await axios.post("https://proj13mywallet.herokuapp.com/signup", body);

        if (response.status === 201) {
          alert("User account has been created successfully");
          navigate("/");
        }
      } catch (err) {
        alert(err.response.data);
        setLoading(false);
      }
    }
  }

  function checkPasswordMatch() {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    return true;
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
          disabled={loading ? "disabled" : ""}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading ? "disabled" : ""}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="on"
          disabled={loading ? "disabled" : ""}
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="on"
          disabled={loading ? "disabled" : ""}
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
