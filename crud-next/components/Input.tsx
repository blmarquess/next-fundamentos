interface InputProps {
  textlabel: string;
  type: string;
  value: string | number;
  disable?: boolean;
  name: string;
  update: (name: string, value: string | number) => void;
}

export default function Input({
  textlabel,
  value,
  disable,
  name,
  update,
  type,
}: InputProps) {
  return (
    <div className="flex w-full items-center justify-between py-1">
      <label htmlFor="impt">{textlabel}</label>
      <input
        type={type}
        id="impt"
        onChange={({ target: { name, value } }) => update(name, value)}
        name={name}
        disabled={disable ?? false}
        value={value}
        className="outline-blue-600 py-2 px-3 mb-2 ml-2 border-solid border border-gray-500 rounded-md grow-1 w-full"
      />
    </div>
  );
}
