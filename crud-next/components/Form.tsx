import React, { useState } from "react";
import Router from "next/router";

import Button from "./Button";
import Input from "./Input";
import Cliente from "../core/Cliente";

interface FormProps {
  id?: string;
  name?: string;
  age?: string;
  funcForm: Function;
}

interface user {
  name: string;
  age: string;
}

export default function Form({ age, name, funcForm }: FormProps): JSX.Element {
  const initial: user = { name: name ?? "", age: age ?? '0' };
  const [nUser, setUser] = useState<user>(initial);

  function upDateUState(name: string, value: string | number): void {
    setUser(() => ({ ...nUser, [name]: value }));
  }

  function goToHome() {
    return Router.push("/");
  }

  function saveUser() {
    const newUser = new Cliente(
      nUser.name,
      nUser.age,
      Math.random().toString(16)
    );

    funcForm(newUser);

    return goToHome();
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
        <Button
          text="Salvar"
          color={`bg-green-400 px-4 py-2 rounded-md border-solid border-1
            border-gray-400 hover:bg-green-700 hover:border-yellow-300`}
          dnf={saveUser}
        />
        <Button
          text="Canselar"
          dnf={goToHome}
          color={`bg-blue-400 px-4 py-2 rounded-md border-solid border-1
            border-gray-400 hover:bg-blue-700 hover:border-yellow-300`}
        />
      </div>
    </section>
  );
}
