import Home from "../pages";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <nav className="nav-menu">
      <NavButton title="Home" destination="/home" />
      <NavButton title="Profile" destination="/profile" />
      <NavButton title="About" destination="/about" />
    </nav>
  );
}