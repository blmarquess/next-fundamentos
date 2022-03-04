
export default class Cliente {
  #id: string;
  #name: string;
  #age: string;

  constructor(name: string, age: string, id: string) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  static cleaner() {
    return new Cliente('', '', '');
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
}
