interface InputProps { textlabel: string, value: string }

export default function Input({textlabel, value }:InputProps) {
  return (
    <label htmlFor="impt">
      { textlabel }
      <input type="text" id="impt" value={ value } />
    </label>
  );
}
