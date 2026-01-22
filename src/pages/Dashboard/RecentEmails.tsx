export default function RecentEmails() {
  const emails = [
    {
      id: 1,
      to: "cliente@email.com",
      subject: "Proposta comercial",
      date: "23/01/2026",
    },
    {
      id: 2,
      to: "rh@empresa.com",
      subject: "Follow-up entrevista",
      date: "22/01/2026",
    },
  ];

  return (
    <div className="recent-emails">
      <h2>📄 Últimos Emails</h2>

      <table>
        <thead>
          <tr>
            <th>Para</th>
            <th>Assunto</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.to}</td>
              <td>{email.subject}</td>
              <td>{email.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
