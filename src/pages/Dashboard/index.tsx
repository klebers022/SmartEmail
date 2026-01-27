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
  "Data ": string;
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

  const emailsPorDia = emails.reduce((acc: Record<string, number>, item) => {
    const dataCompleta = item["Data "];
    if (!dataCompleta) return acc;

    const data = dataCompleta.split(" ")[0];
    acc[data] = (acc[data] || 0) + 1;
    return acc;
  }, {});

  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>📊 Dashboard</h1>
          <p>Visão geral dos envios de email</p>
        </div>

        {/* CARDS */}
        <div className="dashboard-cards">
          <div className="card highlight">
            <span>Total de emails</span>
            <strong>{loading ? "..." : totalEmails}</strong>
          </div>
        </div>

        {/* GRÁFICO */}
        <div className="chart-box">
          <h3>Emails enviados por dia</h3>

          {loading ? (
            <p className="muted">Carregando dados...</p>
          ) : (
            <ul className="chart-list">
              {Object.keys(emailsPorDia).length === 0 && (
                <li>Nenhum envio encontrado</li>
              )}

              {Object.entries(emailsPorDia).map(([data, total]) => (
                <li key={data}>
                  <span>{data}</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{ width: `${total * 15}px` }}
                    />
                    <strong>{total}</strong>
                  </div>
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
