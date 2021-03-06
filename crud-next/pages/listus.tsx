import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TableList from "../components/TableList";
import Cliente from "../core/Cliente";
import dbase from '../backend/config';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

const ListUsers: React.FC = (): JSX.Element => {
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

  async function deletUser(id: string) {
    const userDoc = doc(dbase, "users", id);
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

export default ListUsers;
