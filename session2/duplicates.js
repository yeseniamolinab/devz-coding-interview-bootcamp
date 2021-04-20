class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }
}

function getLinkedList(nodes) {
    let linkedList = new LinkedList();
    for (let i = 0; i < nodes.length; i++) {
      linkedList.add(nodes[i]);
    }
    return linkedList;
}

function removeDuplicates(list) {
  if (!list || list.lenght <= 0) return list;
  let node = list.head;
  let map = new Map();

  while (node) {
    if (!map.get(node.val)) {
      map.set(node.val, node);
    }
    node = node.next;
  }

  return [...map.keys()];
}

// Big O
console.log('The time/space complexity for this solution is O(N) - Linear complexity');

// Tests
const test1 = getLinkedList(Array.from([4, 5, 9, 0, 5, 1, 2]));
const test2 = getLinkedList(Array.from([1,2,3,3,2,1]));

console.log(removeDuplicates(test1), "[4,5,9,0,1,2]");
console.log(removeDuplicates(test2), "[1,2,3]");
