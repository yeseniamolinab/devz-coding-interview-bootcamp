export class Node {
    constructor(val, next, min) {
      this.val = val;
      this.min = min === undefined ? null : min;
      this.next = next === undefined ? null : next;
    }
}