function capitalise(string) {
    return string.charAt(0).toUpperCase().concat(string.slice(1));
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

export {capitalise, reverseString};