import { Stack } from "../utils/stack.js";
import { Node } from "../utils/node.js";

class Queue {
  constructor() {
    this.innerStack1 = new Stack();
    this.innerStack2 = new Stack();
    this.first = null;
  }

  push(val) {
    let node = new Node(val);
    if (this.innerStack1.empty()) this.first = node;

    this.innerStack1.push(node);
  }

  pop() {
    if (this.innerStack2.empty()) {
      while (!this.innerStack1.empty()) {
        this.innerStack2.push(this.innerStack1.pop());
      }
    }

    return this.innerStack2.pop().val;
  }

  peek() {
    if (!this.innerStack2.empty()) return this.innerStack2.top();
    return this.first.val;
  }

  empty() {
    return this.innerStack1.empty() && this.innerStack2.empty();
  }
}

console.log("Time & space complexity is Linear O(N)");

function Test1() {
  let queue = new Queue();
  console.log("Test 1");
  queue.push(1);
  queue.push(2);
  const pop1 = queue.pop();
  console.log(pop1, "1", pop1 == "1" ? "Passed" : "Failed");
  queue.push(3);
  queue.push(4);
  const pop2 = queue.pop();
  console.log(pop2, "2", pop2 == "2" ? "Passed" : "Failed");
  const peek = queue.peek();
  console.log(peek, "3", peek == "3" ? "Passed" : "Failed");
}

Test1();
