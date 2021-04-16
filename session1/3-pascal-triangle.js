function getRow(rowIndex) {
    let row = [1];
    
    if (rowIndex == 0) return [1];
    if (rowIndex == 1) return [1,1];
    
    let prev = getRow(rowIndex-1);
    
    for(let i = 1; i < rowIndex; i++){
        row[i] = prev[i-1] + prev[i];
    }
    row.push(1);
    return row;

};

// Big O
console.log('The time & space complexity: O(n): - Linear time:', '\n');

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));