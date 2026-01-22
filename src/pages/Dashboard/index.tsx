import Layout from "../../components/layouts/Layout";
import EmailForm from "./EmailForm";
import RecentEmails from "./RecentEmails";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>

        {/* Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>📨 Emails enviados</h3>
            <strong>24</strong>
          </div>

          <div className="card">
            <h3>⏱ Último envio</h3>
            <strong>Hoje - 14:32</strong>
          </div>

          <div className="card">
            <h3>⚡ Status</h3>
            <strong>Ativo</strong>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="dashboard-content">
          <EmailForm />
          <RecentEmails />
        </div>
      </div>
    </Layout>
  );
}
