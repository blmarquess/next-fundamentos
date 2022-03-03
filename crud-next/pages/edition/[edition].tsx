import { useRouter } from 'next/router';
import React from "react";
import Layout from "../../components/Layout";
import Form from "../../components/Form";
import { collection, doc, updateDoc, query, where, getDocs } from "firebase/firestore";
import dbase from "../../backend/config";
import Cliente from "../../core/Cliente";

const  edition = ():JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {query: {edition}} = useRouter();
  const idEdit = edition  as string;
  const usersCollectionRef = collection(dbase, "users");
  const getUEdit = async () => {
    const edUser = await getDocs(usersCollectionRef);
    const toEdit = edUser.docs.filter((doc) => doc.id === edition);
    return toEdit;
  }

  const updateUser = async (editUsr: Cliente) => { 
    const userDoc = doc(usersCollectionRef, idEdit);
    const newFealds = {
      name: editUsr.name,
      age: editUsr.age,
      id: editUsr.id,
    };
    const res = await updateDoc(userDoc, newFealds);
    console.log('res',res);
  }

  return (
    <Layout>
      <Form funcForm={updateUser} />
    </Layout>
  );
}

export default edition;