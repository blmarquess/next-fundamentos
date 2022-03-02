import { useEffect, useState } from "react";
// import CollectionClients from "../backend/database/CollectionClients";
import Layout from "../components/Layout";
import TableList from "../components/TableList";
import Cliente from "../core/Cliente";
import dbase from '../backend/config';
import { collection, getDocs } from 'firebase/firestore';
// import ClienteRepositorio from "../core/ClienteRepositorio";

const Home: React.FC = (): JSX.Element => {
  const [clientsListe, setClientsList] = useState<Cliente[]>([]);
  const usersCollectionRef = collection(dbase, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const users = data.docs
        ?.map((doc) => ({ ...doc.data() }))
        .map((us) => new Cliente(us.name, us.age, us.id));

      if (users.length > clientsListe.length) {
        return setClientsList(() => [...users]);
      } else {
        return;
      }
    };
    getUsers();
  }, [clientsListe.length, usersCollectionRef]);

  return (
    <Layout>
      <div>
        <TableList clients={clientsListe ?? []} />
      </div>
    </Layout>
  );
};

export default Home;
