function checkPalindrom(){
    let word=document.getElementById("word").value;
    for(let i=0;i<word.length/2;i++){
        if(word[i]!==word[word.length-1-i]){
            document.getElementById("result").innerText="Not a Palindrom";
            return;
        }
    }
    document.getElementById("result").innerText="It is a Palindrom";
}