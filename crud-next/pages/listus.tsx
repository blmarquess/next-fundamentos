import Layout from "../components/Layout";
import TableList from "../components/TableList";

import { clientList } from "../core/listacli";

export default function listus(){
  return(
  <Layout>
    <section>
      <h1>Pagina de listagem de usuarios</h1>
      <TableList clients={ clientList } />
    </section>
  </Layout>
  );
}
