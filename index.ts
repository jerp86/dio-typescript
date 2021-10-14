interface IDog {
  name: string;
  year: number;
  favoritePark?: string;
}

type TDogReadOnly = {
  +readonly [K in keyof IDog]-?: IDog[K];
};

class MyDog implements TDogReadOnly {
  year;
  name;
  favoritePark;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const dog = new MyDog("Lisa", 7);
