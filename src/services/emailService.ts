export async function enviarEmail(payload: {
  email: string;
  assunto: string;
  tipo: string;
  mensagem: string;
}) {
const response = await fetch(
  "https://defaultf149d0bc0eb54f9a9e8224a76eacf8.de.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/c989306c10c144cc9837e31a18620893/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2V11sToJnPWSWUdpEp1IDMCq7RiQ-twJar3gzjDuK8s",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }
);

  if (!response.ok) {
    throw new Error("Erro ao enviar email");
  }

  return response.json();
}
