import Cliente from '../core/Cliente';

interface TabelaProps { clients: Cliente[] }

export default function TableList({ clients }: TabelaProps) {
  function renderTableHeader() {
    return (
      <tr>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
           Nome
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
           ID
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
           idade
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
           Editar
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
           Excluir
        </td>
      </tr>
    );
  }

  function renderTableBody() {
    return clients?.map((client, i) => (
      <tr key={client.id}>
        <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{i}</td>
        <td className="px-6 py-4 whitespace-nowrap">{client.age}</td>
        <td className="px-6 py-4 whitespace-nowrap">O</td>
        <td className="px-6 py-4 whitespace-nowrap">X</td>
      </tr>
    ));
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 table table-fixed">
              <thead className="bg-gray-50">
                { renderTableHeader() }
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                { renderTableBody() }
              </tbody>
            </table>
         </div>
       </div>
     </div>
    </div>
  );
}
