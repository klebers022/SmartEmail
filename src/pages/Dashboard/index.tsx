import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import EmailForm from "./EmailForm";
import RecentEmails from "./RecentEmails";
import { getHistoricoEmails } from "../../services/emailService";
import "./styles.css";

type Email = {
  ItemInternalId: string;
  Email: string;
  Assunto: string;
  Status: string;
  Data: string;
};

export default function Dashboard() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarHistorico() {
      try {
        const data = await getHistoricoEmails();
        setEmails(data);
      } catch (error) {
        console.error("Erro ao carregar histórico:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarHistorico();
  }, []);

  const totalEmails = emails.length;

  const ultimoEnvio =
    emails.length > 0
      ? emails[0].Data
      : "Nenhum envio";

  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>

        {/* CARDS */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>📨 Emails enviados</h3>
            <strong>{totalEmails}</strong>
          </div>

          <div className="card">
            <h3>⏱ Último envio</h3>
            <strong>{ultimoEnvio}</strong>
          </div>

          <div className="card">
            <h3>⚡ Status</h3>
            <strong>{loading ? "Carregando..." : "Ativo"}</strong>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="dashboard-content">
          <EmailForm />
          <RecentEmails emails={emails.slice(0, 5)} />
        </div>
      </div>
    </Layout>
  );
}
