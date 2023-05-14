//TODO: make 6 fake players
const canvoth = document.getElementById('blahaj');
const oth = canvoth.getContext('2d');
const radiuwus=25;
let xa = 640; let ya = 0;
let xb = 640; let yb = 0;
let xc = 640; let yc = 0;
let xd = 640; let yd = 0;
let xe = 640; let ye = 0;
oth.beginPath(); oth.arc(xa, ya, radiuwus, 0, 2 * Math.PI);
oth.fillStyle = '#d85959'; oth.fill();
oth.beginPath(); oth.arc(xb, yb, radiuwus, 0, 2 * Math.PI);
oth.fillStyle = '#d85959'; oth.fill();
oth.beginPath(); oth.arc(xc, yc, radiuwus, 0, 2 * Math.PI);
oth.fillStyle = '#d85959'; oth.fill();
oth.beginPath(); oth.arc(xd, yd, radiuwus, 0, 2 * Math.PI);
oth.fillStyle = '#d85959'; oth.fill();
oth.beginPath(); oth.arc(xe, ye, radiuwus, 0, 2 * Math.PI);
oth.fillStyle = '#d85959'; oth.fill();

setInterval(function() {
    fetch('http://localhost:8080/players')
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            console.log("Obtained data from API")
            let xa = data.players.a.x_pos; let ya = data.players.a.y_pos;
            let xb = data.players.b.x_pos; let yb = data.players.b.y_pos;
            let xc = data.players.c.x_pos; let yc = data.players.c.y_pos;
            let xd = data.players.d.x_pos; let yd = data.players.d.y_pos;
            let xe = data.players.e.x_pos; let ye = data.players.e.y_pos;
            console.log("Extracted data from API")
            ////////////////////////////////////////////////////////////////////
            oth.beginPath(); oth.arc(xa, ya, radiuwus, 0, 2 * Math.PI);
            oth.fillStyle = '#d85959'; oth.fill();
            oth.beginPath(); oth.arc(xb, yb, radiuwus, 0, 2 * Math.PI);
            oth.fillStyle = '#d85959'; oth.fill();
            oth.beginPath(); oth.arc(xc, yc, radiuwus, 0, 2 * Math.PI);
            oth.fillStyle = '#d85959'; oth.fill();
            oth.beginPath(); oth.arc(xd, yd, radiuwus, 0, 2 * Math.PI);
            oth.fillStyle = '#d85959'; oth.fill();
            oth.beginPath(); oth.arc(xe, ye, radiuwus, 0, 2 * Math.PI);
            oth.fillStyle = '#d85959'; oth.fill();
            console.log("Drawn players")



















        })
        .catch(error => console.error(error)); // Log any errors to the console
    }, 1000);
