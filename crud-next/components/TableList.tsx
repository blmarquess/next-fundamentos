import Cliente from '../core/Cliente';
import BtnEdit from './BtnEditar';
import BtnExcluir from './BtnExcluir';

interface TabelaProps {
  clients: Cliente[];
  fcdelete: Function;
}

export default function TableList({ clients, fcdelete }: TabelaProps) {
  function renderTableHeader() {
    return (
      <tr className="border-solid border-b-2 border-gray-300 bg-blue-400">
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
        >
          ID
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
        >
          Nome
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
        >
          idade
        </td>
        <td
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
        >
          Ações
        </td>
      </tr>
    );
  }

  function renderTableBody() {
    return clients?.map((client, i) => (
      <tr
        key={client.id}
        className={
          i % 2 === 0
            ? `border-solid border-1 border-stone-400 bg-white`
            : `border-solid border-1 border-stone-400 bg-blue-50`
        }
      >
        <td className="px-6 py-4 whitespace-nowrap">{i}</td>
        <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{client.age}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center space-x-2">
            <BtnEdit
              func={() => console.log("clicou no usuario:", client.name)}
            />
            <BtnExcluir func={() => fcdelete(client.id)} />
          </div>
        </td>
      </tr>
    ));
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 shadow-md">
          <div className="shadow-xl overflow-hidden border-b border-gray-200 sm:rounded-lg my-4">
            <table className="min-w-full divide-y divide-gray-200 table table-fixed">
              <thead className="bg-gray-50">{renderTableHeader()}</thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {renderTableBody()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

