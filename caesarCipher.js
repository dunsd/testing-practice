function caesarCipher(string, key) { //97-122 = lowercase, 65-90 = uppercase
    
    let codeArr = string.split("").map(x => x.charCodeAt());//.join(" ");
    for(let i=0;i<codeArr.length;i+=1){
        if((codeArr[i] > 96 && codeArr[i] < 123)) {
            codeArr[i] = modLower(codeArr[i],key);
        }
        else if((codeArr[i] > 64 && codeArr[i] < 91)) {
            codeArr[i] = modUpper(codeArr[i],key);
        }
        codeArr[i] = String.fromCharCode(codeArr[i]);
    }
    console.log(modLower(122,1));
    return codeArr.join("");
}

//Handle wrapping in range
function modLower(index, key) { 
    return ((index-97+key)%26)+97;
}

function modUpper(index, key) { 
    return ((index-65+key)%26)+65;
}

export default caesarCipher;