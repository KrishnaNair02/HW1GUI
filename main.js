const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 't9r7VeHbdO6bnVrSDVmiw0BkQRcpepa3h8CrtWBJ';


document.getElementById("req").onclick = function() {getImg()};
function getImg() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=t9r7VeHbdO6bnVrSDVmiw0BkQRcpepa3h8CrtWBJ')
        .then(response => response.json())
        .then()
}