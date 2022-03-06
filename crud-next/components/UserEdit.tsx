import { collection, doc,  updateDoc } from "firebase/firestore";
import dbase from '../backend/config';
import Cliente from '../core/Cliente';

import Layout from "./Layout";
import Form from "./Form";

interface Props { user: Cliente;}

export default function UserEdit({ user }: Props): JSX.Element {
  const usersCollectionRef = collection(dbase, "users");
  const userDoc = doc(usersCollectionRef, user.id);

  const updateUser = async (editUsr: Cliente) => { 
    const newFealds = {
      name: editUsr.name,
      age: editUsr.age,
      id: editUsr.id,
    };
    await updateDoc(userDoc, newFealds);
  }

  return (
        <Layout>
          <Form
            funcForm={updateUser}
            id={user.id}
            name={user.name}
            age={user.age}
          />
    </Layout>
  )
}
