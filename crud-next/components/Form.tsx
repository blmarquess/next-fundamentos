import React, { useState } from "react";

import Button from "./Button";
import Input from "./Input";

interface FormProps {
  id?: string;
  name?: string;
  age?: number;
}

interface user {
  name: string;
  age: number;
}

export default function Form({ age, name }: FormProps): JSX.Element {
  const initial: user = { name: name ?? "", age: age ?? 0 };
  const [nUser, setUser] = useState<user>(initial);

  function upDateUState(name: string, value: string | number): void {
    setUser(() => ({ ...nUser, [name]: value }));
  }

  return (
    <section className="flex flex-col grow justify-center items-center w-4/5">
      <div className="w-full items-center">
        <Input
          name="name"
          type="text"
          value={nUser.name}
          textlabel="Nome"
          update={upDateUState}
        />
        <Input
          name="age"
          type="number"
          value={nUser.age}
          textlabel="Idade"
          update={upDateUState}
        />
      </div>

      <div className="flex flex-row justify-end w-full mx-4 space-x-2">
        <Button text="Salvar" color="green" />
        <Button text="Canselar" color="orange" />
      </div>
    </section>
  );
}
