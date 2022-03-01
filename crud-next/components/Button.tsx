interface ButtonProps { text: string }

export default function Button({ text }:ButtonProps):JSX.Element {
  return(
    <button type="button" className="px-4 py-2 rounded-md ">
      { text }
    </button>
  );
}
