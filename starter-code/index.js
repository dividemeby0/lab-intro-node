class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  
  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.items.length) {
      pos --;
      return this.items[pos]
    };
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
    return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
    return this.items[0];
    }
  }

  sum() {
    let somme = 0;
    for (let i=0; i< this.length; i++) {
      somme += this.items[i];
    };
    return somme;
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let somme = this.sum();
      let avg = somme/this.length;
      return avg
    };
  }

};

module.exports = SortedList;
