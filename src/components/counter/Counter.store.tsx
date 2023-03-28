import { makeAutoObservable } from "mobx";

class CounterStore {
  count: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count += -1;
  }

  get getCountx2() {
    return this.count * 2;
  }
}

const counter = new CounterStore();

export default counter;
