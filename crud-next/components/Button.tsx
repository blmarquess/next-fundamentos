interface ButtonProps {
  text: string;
  color: string;
  dnf?: () => void;
}

export default function Button({ text, color, dnf }: ButtonProps): JSX.Element {
  return (
    <button type="button" onClick={dnf} className={color}>
      {text}
    </button>
  );
}
