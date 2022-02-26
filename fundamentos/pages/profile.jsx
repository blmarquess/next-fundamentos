import { Button } from "../components/Button";
import Layout from "../components/Layout";

export default function Profile() {
  return (
    <Layout>
      <div>
        <h1>Perfil</h1>
        <h2>Rotas dinamicamentes geradas pelo NextJs</h2>
      </div>
      <Button>
        Voltar
      </Button>
    </Layout>
  );
}
