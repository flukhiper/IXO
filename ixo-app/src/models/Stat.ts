export default class Stat {
  private value: number;

  private listeners: ((value: number) => void)[] = [];

  constructor (initial: number) {
    this.value = initial;
  }

  get (): number {
    return this.value;
  }

  set (newValue: number) {
    this.value = newValue;
    this.listeners.forEach(cb => cb(newValue));
  }

  onChange (cb: (value: number) => void) {
    this.listeners.push(cb);
  }
}