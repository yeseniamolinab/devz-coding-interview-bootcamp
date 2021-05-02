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

console.log("Time & Space(? not sure about space complexity) complexity is Linear O(N)");

console.log('())', minValidParentheses('())'));
console.log('(((', minValidParentheses('((('));
console.log('()', minValidParentheses('()'));
console.log('()))((', minValidParentheses('()))(('));
