/* 
 Anmol Nagpal (Sheridan College)
 */

//note: adding two vars together concatenates them, regardless of whether or not
// they are numbers. Thus, to add 2 numbers together, put a '+' in front of the
//corresponding variable

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encrypt() {
    var encryptionMessage = document.getElementById("plain-text").value;
    var decryptionMessage = document.getElementById("cipher-text");
    var shiftAmount = document.getElementById("shift").value;
    if(shiftAmount > 25){
        shiftAmount = 25;
    }
    if(shiftAmount < 0){
        shiftAmount = 0;
    }
    var decryptedMessage = "";
    for (var i = 0; i < encryptionMessage.length; i++) {
        var letter = encryptionMessage.charAt(i).toLowerCase();
        if (letter === " ") {
            decryptedMessage += " ";
        } else {
            var letterPosition = +alphabet.indexOf(letter);
            if (+letterPosition + +shiftAmount > +alphabet.length - +1) {
                letterPosition = +letterPosition + +shiftAmount - +alphabet.length;
            } else {
                letterPosition = +letterPosition + +shiftAmount;
            }
            var decryptedLetter = alphabet[letterPosition];
            decryptedMessage += decryptedLetter;
        }

    }
    decryptionMessage.setAttribute("value", decryptedMessage);
}

function decrypt(){
    var decryptionMessage = document.getElementById("cipher-text").value;
    var encryptionMessage = document.getElementById("plain-text");
    var shiftAmount = document.getElementById("shift").value;
    if(shiftAmount > 25){
        shiftAmount = 25;
    }
    if(shiftAmount < 0){
        shiftAmount = 0;
    }
    var encryptedMessage = "";
    for (var i = 0; i < decryptionMessage.length; i++) {
        var letter = decryptionMessage.charAt(i).toLowerCase();
        if (letter === " ") {
            encryptedMessage += " ";
        } else {
            var letterPosition = +alphabet.indexOf(letter);
            if (+letterPosition - +shiftAmount < 0) {
                letterPosition = +letterPosition - +shiftAmount + +alphabet.length;
            } else {
                letterPosition = +letterPosition - +shiftAmount;
            }
            var encryptedLetter = alphabet[letterPosition];
            encryptedMessage += encryptedLetter;
        }

    }
    encryptionMessage.setAttribute("value", encryptedMessage);
}

