import Cliente from '../core/Cliente';

interface TabelaProps { clients: Cliente[] }

export default function TableList({ clients }: TabelaProps) {
  function renderTableHeader() {
    return (
      <tr>
        <td>ID</td>
        <td>Nome</td>
        <td>idade</td>
      </tr>
    );
  }

  function renderTableBody() {
    return clients?.map((client, i) => (
      <tr key={client.id}>
        <td>{i}</td>
        <td>{client.name}</td>
        <td>{client.age}</td>
      </tr>
    ));
  }
  return (
    <table className="w-full">
      <thead className="text-gray-50 rounded-xl bg-rose-700">
        { renderTableHeader() }
      </thead>
      <tbody>
        { renderTableBody() }
      </tbody>
    </table>
  );
}
