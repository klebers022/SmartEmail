import { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import EmailForm from "./EmailForm";
import { getHistoricoEmails } from "../../services/emailService";
import "./styles.css";

type Email = {
  ItemInternalId: string;
  Email: string;
  Assunto: string;
  Status: string;
  "Data ": string; // ⚠️ campo vem com espaço do Power Automate
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

  // Agrupar emails por data (com proteção)
  const emailsPorDia = emails.reduce((acc: Record<string, number>, item) => {
    const dataCompleta = item["Data "];

    if (!dataCompleta) return acc;

    const data = dataCompleta.split(" ")[0]; // dd/MM/yyyy
    acc[data] = (acc[data] || 0) + 1;

    return acc;
  }, {});

  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>

        {/* CARDS */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>📨 Emails enviados</h3>
            <strong>{loading ? "..." : totalEmails}</strong>
          </div>
        </div>

        {/* GRÁFICO */}
        <div className="chart-box">
          <h3>📊 Emails enviados por dia</h3>

          {loading ? (
            <p>Carregando dados...</p>
          ) : (
            <ul className="chart-list">
              {Object.keys(emailsPorDia).length === 0 && (
                <li>Nenhum email encontrado</li>
              )}

              {Object.entries(emailsPorDia).map(([data, total]) => (
                <li key={data}>
                  <span>{data}</span>
                  <strong>{total}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FORMULÁRIO */}
        <EmailForm />
      </div>
    </Layout>
  );
}
