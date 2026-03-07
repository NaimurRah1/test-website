const words = ["Power BI Developer", "SQL Analyst", "Python Programmer", "Data Enthusiast"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    let loopTyping = function() {
        if(word.length > 0) {
            document.getElementById('typing-container').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 1500);
            return false;
        }
        timer = setTimeout(loopTyping, 150);
    };
    loopTyping();
}

function deletingEffect() {
    let word = document.getElementById('typing-container').innerHTML.split("");
    let loopDeleting = function() {
        if(word.length > 0) {
            word.pop();
            document.getElementById('typing-container').innerHTML = word.join("");
        } else {
            i = (i + 1) % words.length;
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
}

typingEffect();
