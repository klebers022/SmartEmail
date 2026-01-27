import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./styles.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    login(email, senha);
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>SmartMail</h1>
        <p>Automação inteligente de e-mails</p>

        {error && <span className="error">{error}</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
