export type EnviarEmailPayload = {
  email: string;
  assunto: string;
  tipo: string;
  mensagem: string;
};

export type EmailHistorico = {
  "Nome ": string;
  "Email ": string;
  "Assunto ": string;
  "Mensagem": string;
  "Data ": string;
  "Status": string;
};

const SEND_EMAIL_URL = import.meta.env.VITE_SEND_EMAIL_URL;
const GET_HISTORICO_URL = import.meta.env.VITE_GET_HISTORICO_URL;

export async function enviarEmail(payload: EnviarEmailPayload) {
  const response = await fetch(SEND_EMAIL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar email");
  }

  return response.json();
}

export async function getHistoricoEmails(): Promise<EmailHistorico[]> {
  const response = await fetch(GET_HISTORICO_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar histórico");
  }

  const data = await response.json();
  return data.data;
}
