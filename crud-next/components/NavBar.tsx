import { NavLink } from "./NavLink";


export default function NavBar() {
  return(
    <nav className="flex justify-center items-center bg-blue-900 text-white p-8 h-20 w-full">
      <NavLink destination="/cadastro" title="Cadastrar Usuario" />
      {/* <NavLink destination="/edition" title="Editar" /> */}
      <NavLink destination="/listus" title="Listar Usuarios" />
    </nav>
  );
}
