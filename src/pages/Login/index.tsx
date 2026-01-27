import { useState } from "react";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setError("");

    if (!email || !senha) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);

      // 🔒 Aqui futuramente entra a autenticação real
      if (email === "admin@gmail.com" && senha === "123456") {
        localStorage.setItem("auth", "true");
        window.location.href = "/dashboard";
      } else {
        setError("Email ou senha inválidos.");
      }
    } catch (err) {
      setError("Erro ao realizar login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>SmartMail</h1>
        <p>Faça login para continuar</p>

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

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}
