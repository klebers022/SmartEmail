type Email = {
  ItemInternalId: string;
  Email: string;
  Assunto: string;
  Data: string;
  Status: string;
};

export default function RecentEmails({ emails }: { emails: Email[] }) {
  return (
    <div className="recent-emails">
      <h2>Últimos Emails</h2>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Assunto</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.ItemInternalId}>
              <td>{email.Email}</td>
              <td>{email.Assunto}</td>
              <td>{email.Data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
