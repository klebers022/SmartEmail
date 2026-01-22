import { useState } from "react";
import Button from "../../components/ui/Button";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  function validarFormulario() {
    const newErrors: any = {};

    if (!email) {
      newErrors.email = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!assunto) newErrors.assunto = "O assunto é obrigatório";
    if (!tipo) newErrors.tipo = "O tipo do email é obrigatório";
    if (!mensagem) newErrors.mensagem = "A mensagem é obrigatória";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async () => {
    if (!validarFormulario()) return;

    try {
      setLoading(true);

      const payload = {
        email,
        assunto,
        tipo,
        mensagem,
      };

      console.log("Enviando:", payload);

      alert("Email enviado com sucesso 🚀");

      // Limpar formulário
      setEmail("");
      setAssunto("");
      setTipo("");
      setMensagem("");
      setErrors({});
    } catch (error) {
      alert("Erro ao enviar email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-form">
      <h2>📧 Enviar Email</h2>

      <div>
        <input
          placeholder="Email do destinatário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <input
          placeholder="Assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />
        {errors.assunto && <span className="error">{errors.assunto}</span>}
      </div>

      <div>
        <input
          placeholder="Tipo de email (Ex: Formal)"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        {errors.tipo && <span className="error">{errors.tipo}</span>}
      </div>

      <div>
        <textarea
          placeholder="Digite a mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        {errors.mensagem && (
          <span className="error">{errors.mensagem}</span>
        )}
      </div>

      <Button
        text={loading ? "Enviando..." : "Enviar Email"}
        onClick={handleSubmit}
      />
    </div>
  );
}
