// ===============================
// TIPOS
// ===============================

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

// ===============================
// URLS DO POWER AUTOMATE
// ===============================

const SEND_EMAIL_URL =
  "https://defaultf149d0bc0eb54f9a9e8224a76eacf8.de.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/c989306c10c144cc9837e31a18620893/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2V11sToJnPWSWUdpEp1IDMCq7RiQ-twJar3gzjDuK8s";

const GET_HISTORICO_URL =
  "https://defaultf149d0bc0eb54f9a9e8224a76eacf8.de.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/c9ff82ab9bbb4c11968b4890f93fc16f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wUyItp5YuNfR_SbbupM1LtewOTIL9P5tcDO3eKLd-cA"; // ← fluxo que retorna o Excel

// ===============================
// ENVIAR EMAIL
// ===============================

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

// ===============================
// BUSCAR HISTÓRICO
// ===============================

export async function getHistoricoEmails() {
  const response = await fetch(GET_HISTORICO_URL, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar histórico");
  }

  const data = await response.json();
  return data.data; // vem do Response do Power Automate
}
