import { useEffect, useState } from "react";
// import CollectionClients from "../backend/database/CollectionClients";
import Layout from "../components/Layout";
import TableList from "../components/TableList";
import Cliente from "../core/Cliente";
import dbase from '../backend/config';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
// import ClienteRepositorio from "../core/ClienteRepositorio";

const Home: React.FC = (): JSX.Element => {
  const [clientsListe, setClientsList] = useState<Cliente[]>([]);
  const usersCollectionRef = collection(dbase, "users");
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const users = data.docs
        ?.map((doc) => ({
          name: doc.data().name,
          age: doc.data().age,
          id: doc.id,
        }))
        .map((us) => new Cliente(us.name, us.age, us.id));

      if (users.length > clientsListe.length) {
        return setClientsList(() => [...users]);
      } else {
        return;
      }
    };
    getUsers();
  }, [clientsListe.length, usersCollectionRef]);

  async function deletUser(cli: Cliente) {
    const userDoc = doc(dbase, "users", cli.id);
    await deleteDoc(userDoc);
    router.reload();
  }

  return (
    <Layout>
      <div>
        <TableList clients={clientsListe ?? []} fcdelete={deletUser} />
      </div>
    </Layout>
  );
};

export default Home;
