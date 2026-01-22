import Layout from "../../components/layouts/Layout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Dashboard() {
  return (
    <Layout>
      <Card title="Gerar Email">
        <p>Crie emails automaticamente com IA.</p>
        <Button text="Gerar Email" />
      </Card>
    </Layout>
  );
}
