import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { getHistoricoEmails } from "../../services/emailService";
import "./styles.css";

type Email = {
  "Nome ": string;
  "Email ": string;
  "Assunto ": string;
  "Mensagem": string;
  "Data ": string;
  "Status": string;
};

export default function Historico() {
  const [search, setSearch] = useState("");
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function carregarHistorico() {
      try {
        const data = await getHistoricoEmails();
        setEmails(data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar histórico de emails");
      } finally {
        setLoading(false);
      }
    }

    carregarHistorico();
  }, []);

  const filteredEmails = emails.filter(
    (email) =>
      email["Email "].toLowerCase().includes(search.toLowerCase()) ||
      email["Assunto "].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="historico">
        <h1>Histórico de Emails</h1>

        {/* Filtro */}
        <input
          className="search"
          placeholder="Buscar por email ou assunto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Loading */}
        {loading && <p>Carregando histórico...</p>}

        {/* Erro */}
        {error && <p className="error">{error}</p>}

        {/* Tabela */}
        {!loading && !error && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Destinatário</th>
                  <th>Assunto</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmails.map((email, index) => (
                  <tr key={index}>
                    <td>{email["Email "]}</td>
                    <td>{email["Assunto "]}</td>
                    <td>
                      <span
                        className={`status ${
                          email.Status === "Enviado"
                            ? "success"
                            : "pending"
                        }`}
                      >
                        {email.Status || "Pendente"}
                      </span>
                    </td>
                    <td>{email["Data "]}</td>
                    <td>
                      <button
                        className="view-btn"
                        onClick={() => alert(email.Mensagem)}
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredEmails.length === 0 && (
              <p className="empty">Nenhum email encontrado.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
