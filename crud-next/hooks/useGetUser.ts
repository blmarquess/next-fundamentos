import { useEffect, useState } from 'react';
import { collection, doc, getDoc } from "firebase/firestore";
import dbase from '../backend/config';
import Cliente from '../core/Cliente';

const useGetUser = (collectionID: string) => {
  const usersCollectionRef = collection(dbase, "users");
  const userDoc = doc(usersCollectionRef, collectionID );
  const [user, setUser] = useState<Cliente>(Cliente.cleaner);
  useEffect(() => {
    const getUser = async () => {
      const usDocs = (await getDoc(userDoc)).data();
      if (usDocs?.name && user.name === '') {
        const AtEdit = new Cliente(usDocs.name, usDocs.age, userDoc.id);
          return  setUser(AtEdit);
      }};
    getUser();
  }, [user.name, userDoc]);
  return user;
}

export default useGetUser;