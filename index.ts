interface IPerson {
  name: string;
  year: number;
  nationality: string;
}

interface IBrazilian extends Omit<IPerson, "nationality"> {}

const brazilianPerson: IBrazilian = {
  name: "José Eduardo",
  year: 35,
};
