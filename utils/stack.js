import { Node } from '../utils/node.js';

export class Stack {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if(this.size === 0) {
            node.min = val;
            this.first = node;
        } else {
            let currentFirst = this.first;
            node.min = Math.min(currentFirst.min, val);
            this.first = node;
            this.first.next = currentFirst;
        }

        return this.size++;
    }

    pop(){
        if(this.size === 0) return null;
        let currentFirst = this.first;
        this.first = currentFirst.next;
        this.size--;
        return currentFirst.val;
    }

    top(){
        return this.first.val;
    }

    getMin(){
        return this.first.min;
    }
}