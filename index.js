const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function encrypt() {
    var digit = document.getElementById("key").value;
    var text = document.getElementById('userText').value;
    var output = document.getElementById("output");
    var temp;
    console.log(text)
    if (text == '') {
        alert("Enter text first");
    }
    else {
        if (digit == '') {
            alert("Enter a key")
        }
        else {
            for (var i = 0; i < text.length; i++) {
                temp = text[i].charCodeAt(0) + parseInt(digit);
                output.innerHTML += temp + generateString(1);
            }
        }
    }
}

function decrypt() {
    var digit = document.getElementById("key").value;
    var text = document.getElementById('userText').value;
    var output = document.getElementById("output");
    var temp;
    var Numb = '';
    if (text == '') {
        alert("Enter text first");
    }
    else {
        if (digit == '') {
            alert("Enter a key")
        }
        else {
            for (var i = 0; i <= text.length; i++) {
                Numb += text[i];
                console.log(Numb)
                if (characters.includes(text[i])) {
                    console.log(Numb.length)
                    Numb = parseInt(Numb.substring(0, Numb.length - 1))
                    Numb -= parseInt(digit)
                    console.log(String.fromCharCode(Numb))
                    output.innerHTML += String.fromCharCode(Numb)
                    Numb = ''
                }
            }
        }
    }
}

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

