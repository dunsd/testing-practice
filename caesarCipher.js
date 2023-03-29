function caesarCipher(string, key) { //97-122 = lowercase, 65-90 = uppercase
    
    let codeArr = string.split("").map(x => x.charCodeAt());//.join(" ");
    codeArr.forEach(char => {
        if(char > 96 && char < 123) {
            char = char += key;
            //console.log(char);
        }
        
    });
    return codeArr.join("");
}

function mod() {
    
}

export default caesarCipher;