import Layout from "../../components/layouts/Layout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "./styles.css";

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>

        {/* Cards de métricas */}
        <div className="cards">
          <Card title="📨 Emails Enviados">
            <h2>24</h2>
          </Card>

          <Card title="⏱ Último Envio">
            <h2>Hoje às 14:32</h2>
          </Card>

          <Card title="⚡ Status">
            <h2>Ativo</h2>
          </Card>
        </div>

        {/* Ação principal */}
        <div className="action-box">
          <h2>Gerar novo email</h2>
          <p>
            Gere automaticamente um email profissional utilizando inteligência
            artificial.
          </p>

          <Button text="Gerar Email" />
        </div>
      </div>
    </Layout>
  );
}
