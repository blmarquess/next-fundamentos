import { useEffect, useState } from "react";
import CollectionClients from "../backend/database/CollectionClients";
import Layout from "../components/Layout";
import TableList from "../components/TableList";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

const Home: React.FC = (): JSX.Element => {
  const [clientsListe, setClientsList] = useState<Cliente[]>([]);

  useEffect(() => {
    const repo: ClienteRepositorio = new CollectionClients();
    repo.getAllCli().then((res) => {
      setClientsList(res);
      localStorage.setItem("fire", JSON.stringify(res));
    });
  }, []);

  return (
    <Layout>
      <div>
        <TableList clients={clientsListe ?? []} />
      </div>
    </Layout>
  );
};

export default Home;
