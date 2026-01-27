import { useState } from "react";
import Button from "../../components/ui/Button";
import { enviarEmail } from "../../services/emailService";
import "./styles.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function validarFormulario() {
    const newErrors: Record<string, string> = {};

    if (!email) newErrors.email = "O email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email inválido";

    if (!assunto) newErrors.assunto = "O assunto é obrigatório";
    if (!tipo) newErrors.tipo = "O tipo do email é obrigatório";
    if (!mensagem) newErrors.mensagem = "A mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validarFormulario()) return;

    try {
      setLoading(true);
      setSuccess("");
      setErrors({});

      await enviarEmail({ email, assunto, tipo, mensagem });

      setSuccess("✅ Email enviado com sucesso!");
      setEmail("");
      setAssunto("");
      setTipo("");
      setMensagem("");
    } catch {
      setErrors({ api: "Erro ao enviar email. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="email-form">
      <h2>📧 Enviar Email</h2>

      {success && <p className="success">{success}</p>}
      {errors.api && <p className="error">{errors.api}</p>}

      <div className="form-group">
        <input
          placeholder="Email do destinatário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <input
          placeholder="Assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />
        {errors.assunto && <span className="error">{errors.assunto}</span>}
      </div>

      <div className="form-group">
        <input
          placeholder="Tipo do email (Ex: Formal)"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        {errors.tipo && <span className="error">{errors.tipo}</span>}
      </div>

      <div className="form-group">
        <textarea
          placeholder="Digite a mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        {errors.mensagem && <span className="error">{errors.mensagem}</span>}
      </div>

      <Button
        text={loading ? "Enviando..." : "Enviar Email"}
        onClick={handleSubmit}
        disabled={loading}
      />
    </div>
  );
}
