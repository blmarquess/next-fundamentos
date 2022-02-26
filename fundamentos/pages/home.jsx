import { Button } from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <h2>Rotas dinamicamentes geradas pelo NextJs</h2>
        <Button>Click aqui se o styled funcionou!</Button>
      </div>
    </Layout>
  );
}
