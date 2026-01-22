import "./styles.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>📧 E-mails enviados</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>⏱ Último envio</h3>
          <p>-</p>
        </div>

        <div className="card">
          <h3>🤖 Status da IA</h3>
          <p className="online">Online</p>
        </div>
      </div>

      <button className="btn">
        + Criar novo e-mail
      </button>
    </div>
  );
}
