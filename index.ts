function soma(a: number, b: number) {
  return a + b;
}

interface IAnimal {
  name: string;
  type: "terrestre" | "aquático";
  runRoar(loudness: number): void;
  // runRoar: (loudness: number) => void;
}

interface IFeline extends IAnimal {
  nightVision: boolean;
}

const animal: IAnimal = {
  name: "Elefante",
  type: "terrestre",
  runRoar: (loudness) => `${loudness}db`,
};

animal.runRoar(1);

const feline: IFeline = {
  name: "Leão",
  type: "terrestre",
  runRoar: (loudness) => `${loudness}db`,
  nightVision: true,
};
