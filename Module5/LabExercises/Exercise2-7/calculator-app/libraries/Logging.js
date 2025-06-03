class Logger {
  constructor(operation) {
    this.id = operation;
    this.randomId = Math.floor(Math.random() * 1000);
  }
  log = (value) => {
    console.log(
      `[Random ID: ${this.randomId}] [Operation type :${this.id}] [result=${value}]`
    );
  };
}

module.exports = Logger;
