import Link from "next/link";

export default function NavButton(props) {
  return (
    <Link href={props.destination} >
        <a>
          <h1>{props.title}</h1>
        </a>
    </Link>
  );
}