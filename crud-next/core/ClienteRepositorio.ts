import Cliente from "./Cliente";

export default interface ClienteRepositorio {
  saveCli(cliente: Cliente): Promise<Cliente>
  deletCli(cliente: Cliente): Promise<void>
  getAllCli(): Promise<Cliente[]>
}
