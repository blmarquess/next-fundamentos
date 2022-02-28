import Link from "next/link";

interface NavBarProps{
  destination: string,
  title:string
}

export function NavLink({destination, title}:NavBarProps):JSX.Element {
  return(
    <span className="font-bold mx-2 border-b-4 border-white">
      <Link href={ destination }>
      <a>
        {title}
      </a>
      </Link>  
    </span>
  );
}
