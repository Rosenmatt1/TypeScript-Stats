class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a
  }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(10);

const holdString = new HoldAnything<string>();
holdString.data = "dscdcsdc";