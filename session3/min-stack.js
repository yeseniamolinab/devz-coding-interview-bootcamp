import { Stack } from '../utils/stack.js';

console.log('Time & space complexity is constant O(1)');

function Test1 (){
    let minStack = new Stack();
    console.log('Test 1');
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    const getmin1 = minStack.getMin();
    console.log(getmin1, '-3', getmin1 == '-3' ? 'Passed' : 'Failed');
    minStack.pop();
    console.log(minStack.top(), '0', minStack.top() == '0' ? 'Passed' : 'Failed');
    const getmin2 = minStack.getMin();
    console.log(getmin2, '-2', getmin2 == '-2' ? 'Passed' : 'Failed');
}

function Test2 (){
    let minStack = new Stack();
    console.log('Test 2');
    minStack.push(2);
    minStack.push(0);
    minStack.push(3);
    minStack.push(0);
    const getMin1 = minStack.getMin();
    console.log(getMin1, '0', getMin1 == '0' ? 'Passed' : 'Failed');
    minStack.pop();
    const getmin2 = minStack.getMin();
    console.log(getmin2, '0', getmin2 == '0' ? 'Passed' : 'Failed');
    minStack.pop();
    const getmin3 = minStack.getMin();
    console.log(getmin3, '0', getmin3 == '0' ? 'Passed' : 'Failed');
    minStack.pop();
    const getmin4 = minStack.getMin();
    console.log(getmin4, '2', getmin4 == '2' ? 'Passed' : 'Failed');
}

Test1();
Test2();