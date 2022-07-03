import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import CashOperationPage from "./CashOperationPage";

export default function App() {

    const [data, setData] = useState({});

  return (
    <UserContext.Provider value={{data, setData}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:operation" element={<CashOperationPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
