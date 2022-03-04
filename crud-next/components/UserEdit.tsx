import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import dbase from '../backend/config';
import Cliente from '../core/Cliente';

import Layout from "./Layout";
import Form from "./Form";

export default function UserEdit():JSX.Element {
  const idEdit = useRouter().query.edition as string;
  const usersCollectionRef = collection(dbase, "users");
  const userDoc = doc(usersCollectionRef, idEdit );
  const [edUser, setEdUser] = useState<Cliente>(Cliente.cleaner());

  useEffect(() => {
    const getUser = async () => {
      const usDocs = (await getDoc(userDoc)).data();
      const AtEdit = new Cliente(usDocs?.name, usDocs?.age, usDocs?.id);
      if (edUser.name === '') {
        return  setEdUser(AtEdit);
      }};
    getUser();
  }, [edUser, userDoc]);

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
            id={edUser && edUser.id}
            name={edUser.name}
            age={edUser.age}
          />
    </Layout>
  )
}
