function capitalise(string) {
    return string.charAt(0).toUpperCase().concat(string.slice(1));
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

const calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b,
}

export {capitalise, reverseString, calculator};