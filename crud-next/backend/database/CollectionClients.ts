import Cliente from "../../core/Cliente";
import firebase from "../config";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class CollectionClients implements ClienteRepositorio {

  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        name: cliente.name,
        age:cliente.age
      }
    },

    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions): Cliente {
        const data = snapshot?.data(options);
      return new Cliente(data.name, data.age, snapshot?.id)
    }
  }

  async saveCli(cliente: Cliente): Promise<Cliente> {
      if(cliente?.id) {
        await this.#colecao().doc(cliente.id).set(cliente)
        return cliente;
      } else {
        const docRef = await this.#colecao().add(cliente);
        const doc = await docRef.get()
        return doc.data();
      }
  }
  
  async deletCli(cliente: Cliente): Promise<void> {
      return this.#colecao().doc(cliente.id).delete();
  }
  
  async getAllCli(): Promise<Cliente[]> {
    const query = await this.#colecao().get();   
    return query.docs?.map((doc: { data: () => any; }) => doc.data()) ?? [];
  }

  #colecao() {
    return firebase().collection('clientes').withConverter(this.#conversor)
  }
}
