import Layout from "../components/Layout";
import TableList from "../components/TableList";

import { clientList } from "../core/listacli";

export default function listus(){
  return(
  <Layout>
    <TableList clients={ clientList } />
  </Layout>
  );
}
