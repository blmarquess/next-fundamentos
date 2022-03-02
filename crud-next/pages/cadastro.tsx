import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import { addDoc, collection } from "firebase/firestore";
import dbase from "../backend/config";
import Cliente from "../core/Cliente";

export default function cadastro(): JSX.Element {
  const usersCollectionRef = collection(dbase, "users");

  const addUser = async (newUsr: Cliente) => {
    await addDoc(usersCollectionRef, {
      name: newUsr.name,
      age: newUsr.age,
      id: newUsr.id,
    });
  };

  return (
    <Layout>
      <Form funcForm={addUser} />
    </Layout>
  );
}
