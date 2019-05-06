var myImage = document.querySelector('img');

myImage.onclick = function() {
    
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moose.jpg') {
        myImage.setAttribute('src', 'images/moose2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/moose.jpg');
    }
 
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Moose are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else { 
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Moose are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}