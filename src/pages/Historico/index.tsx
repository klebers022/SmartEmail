import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import "./styles.css";

type Email = {
  id: number;
  to: string;
  subject: string;
  status: string;
  date: string;
};

export default function Historico() {
  const [search, setSearch] = useState("");

  const emails: Email[] = [
    {
      id: 1,
      to: "cliente@email.com",
      subject: "Proposta Comercial",
      status: "Enviado",
      date: "23/01/2026",
    },
    {
      id: 2,
      to: "rh@empresa.com",
      subject: "Follow-up Entrevista",
      status: "Enviado",
      date: "22/01/2026",
    },
    {
      id: 3,
      to: "contato@empresa.com",
      subject: "Apresentação de Serviços",
      status: "Pendente",
      date: "21/01/2026",
    },
  ];

  const filteredEmails = emails.filter(
    (email) =>
      email.to.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase())
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

        {/* Tabela */}
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
              {filteredEmails.map((email) => (
                <tr key={email.id}>
                  <td>{email.to}</td>
                  <td>{email.subject}</td>
                  <td>
                    <span
                      className={`status ${
                        email.status === "Enviado"
                          ? "success"
                          : "pending"
                      }`}
                    >
                      {email.status}
                    </span>
                  </td>
                  <td>{email.date}</td>
                  <td>
                    <button className="view-btn">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
