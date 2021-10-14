// Generic types

function addAppendixToList<T>(array: any[], value: T) {
  return array.map((item) => item + value);
}

addAppendixToList([1, 2, 3], 4);
