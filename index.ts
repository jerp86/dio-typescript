function soma(a: number, b: number) {
  return a + b;
}

interface IAnimal {
  name: string;
  type: "terrestre" | "aquático";
  domestic: boolean;
}

interface IFeline extends IAnimal {
  nightVision: boolean;
}

interface ICanine extends IAnimal {
  size: "pequeno" | "medio" | "grande";
}

type IDomestic = IFeline | ICanine;

const animal: IDomestic = {
  name: "cachorro",
  type: "terrestre",
  domestic: true,
  size: "medio",
};
