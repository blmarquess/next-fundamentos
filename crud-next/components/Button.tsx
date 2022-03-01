interface ButtonProps {
  text: string;
  color: string;
}

export default function Button({ text, color }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`bg-${color}-300  px-4 py-2 rounded-md border-solid border-1 
      border-gray-400 hover:bg-${color}-100 hover:border-yellow-300`}
    >
      {text}
    </button>
  );
}
