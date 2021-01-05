class LSMock {
  constructor() {
    this.store = {};
  }
  setItem (key, value) { this.store[key] = value };
  getItem (key) { this.store[key] };
  clear () { this.store = {} };
  removeItem (key) { delete this.store[key]};
};

export default LSMock;


