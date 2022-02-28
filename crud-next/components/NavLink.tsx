import Link from "next/link";

interface NavBarProps{
  destination: string,
  title:string
}

export function NavLink({destination, title}:NavBarProps):JSX.Element {
  return(
    <span className={ `font-bold px-3 mx-4 border-solid border-b-2 border-blue-900
    hover:border-white cursor-pointer rounded-b-md` }>
      <Link href={ destination }>
      <a>
        {title}
      </a>
      </Link>  
    </span>
  );
}
