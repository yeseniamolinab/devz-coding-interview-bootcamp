import { Stack } from "../utils/stack.js";

function minValidParentheses(input) {
    let res = 0;
    let balance = 0;

    for(let i = 0; i < input.length; i++) {
        balance += input[i] === '(' ? 1 : -1;
        if(balance === -1) {
            res++;
            balance++;
        }
    }

    return res + balance;
}

function minValidParenthesesWithStack(input) {
    const mappings = new Map();
    mappings.set(')', '(');
    mappings.set('}', '{');
    mappings.set(']', '[');
    
    let stack = new Stack();
    let leftover = 0;
    
    for(let i = 0; i < input.length; i++) {
        const parentheses = input[i];
        if(mappings.has(parentheses)) {
            const top = stack.empty() ? '' : stack.pop();
            if(top !== mappings.get(parentheses)) leftover++;
        } else {
            stack.push(parentheses);
        }
    }

    return stack.size + leftover;
}

console.log("Time & Space(? not sure about space complexity) complexity is Linear O(N)");

console.log('())', minValidParentheses('())'));
console.log('(((', minValidParentheses('((('));
console.log('()', minValidParentheses('()'));
console.log('()))((', minValidParentheses('()))(('));
console.log('**************************************');
console.log('())', minValidParenthesesWithStack('())'));
console.log('(((', minValidParenthesesWithStack('((('));
console.log('()', minValidParenthesesWithStack('()'));
console.log('()))((', minValidParenthesesWithStack('()))(('));
