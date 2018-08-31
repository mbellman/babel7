class A {
  #b = 1;
  #c = 2;

  getB () {
    return this.#b;
  }

  setB (value) {
    this.#b = value;
  }

  getC () {
    return this.#c;
  }
}
