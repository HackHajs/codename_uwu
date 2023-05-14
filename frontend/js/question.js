const cnvs = document.getElementById("quest");
const cnv = cnvs.getContext("2d");
cnv.fillStyle = '#FFFFFF'; cnv.fillRect(0,0,640,100);
cnv.fillStyle = '#000000'; cnv.font = "20px serif"; cnv.fillText("Are you an informed tourist? Let's check with this quick quiz!", 27, 50 , 600);
setInterval(function() {
    fetch('http://localhost:8080/question')
        .then(response => response.json())
        .then(data => {
            var question=data.question;
            console.log(question);
            cnv.clearRect(0, 0, cnvs.width, cnvs.height);
            cnv.fillStyle = '#FFFFFF'; cnv.fillRect(0,0,640,100);
            cnv.fillStyle = '#000000'; cnv.fillText(question, 20, 50 , 600);
        })
        .catch(error => console.error(error)); // Log any errors to the console
}, 10000);