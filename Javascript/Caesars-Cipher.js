/*

JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function rot13(str) { // LBH QVQ VG!
    const alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26 letters
    const firstHalf = /[ABCDEFGHIJKLM]/ //0-12 add 13
    //13-25 minus 13
    var answer=""
    for (let i=0; i<str.length; i++){
        if (/[^\w]|_/g.test(str[i])){
            answer+= str[i];
        }
        else if (firstHalf.test((str[i]))){
            answer += alphabet[alphabet.indexOf(str[i])+13];
        }
        else{
            answer += alphabet[alphabet.indexOf(str[i])-13];
        }
    }
    return(answer);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");