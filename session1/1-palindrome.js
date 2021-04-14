function palidrome(phrase) {
    if (!phrase) {
        return false;
    }

    const arr = phrase.toLowerCase().split('').filter(i => 
        {
            return i.trim() != '' && /^[0-9a-z]+$/.test(i)
        });

    let length = arr.length;

    for (let i = length; i > 0; i--) {
        if (arr[i-1] !== arr[length-i]) {
            return false;
        }
    }

    return true;
}

// Big O
console.log('The time complexity is: O(N) - Linear Time', '\n')

// Tests
console.log(palidrome('race a car'), 'false');
console.log(palidrome('A man, a plan, a canal: Panama'), 'true');
console.log(palidrome('1b1'), 'true');
console.log(palidrome('Claramente, esto no es un palíndromo'), 'false');
console.log(palidrome('La ruta nos aportó otro paso natural'), 'true');
