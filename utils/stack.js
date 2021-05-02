import { Node } from '../utils/node.js';

export class Stack {
    constructor() {
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if(this.size === 0) {
            node.min = val;
            this.last = node;
        } else {
            let currentLast = this.last;
            node.min = Math.min(currentLast.min, val);
            this.last = node;
            this.last.next = currentLast;
        }

        return this.size++;
    }

    pop(){
        if(this.size === 0) return null;
        let currentLast = this.last;
        this.last = currentLast.next;
        this.size--;
        return currentLast.val;
    }

    top(){
        return this.last.val;
    }

    getMin(){
        return this.last.min;
    }

    empty() {
        return this.size <= 0;
    }
}