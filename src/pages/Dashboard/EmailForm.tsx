import { useState } from "react";
import Button from "../../components/ui/Button";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      assunto,
      tipo,
      mensagem,
    };

    console.log("Enviar para API:", payload);
    alert("Email enviado para geração 🚀");
  };

  return (
    <div className="email-form">
      <h2>📧 Gerar Email</h2>

      <input
        placeholder="Email do destinatário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Assunto"
        value={assunto}
        onChange={(e) => setAssunto(e.target.value)}
      />

      <input
        placeholder="Tipo de email (Formal, Comercial...)"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />

      <textarea
        placeholder="Descreva o conteúdo do email..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      <Button text="Gerar Email" onClick={handleSubmit} />
    </div>
  );
}
