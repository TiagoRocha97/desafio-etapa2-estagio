function reverseString(text){
    
    let reverseText="";
    for (let i = text.length-1; i >=0; i--) {
        const element = text[i];
        reverseText+= element;
    
    }
    return reverseText;
}
console.log(reverseString("vitor"));