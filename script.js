var leftCar = document.getElementById("leftcar_id");
var leftCarInfo = document.getElementById("carleft_info");
var rightCar = document.getElementById("rightcar_id");
var rightCarInfo = document.getElementById("carright_info");
var question = document.getElementById("question_id");
var scoreCounter = document.getElementById("score_id");

var score = 0;
var win = 0;
var lose = 0;
var round = 0;
var index = 0;

var questionText = [
    "Welke auto heeft het meeste PK?",
    "Welke auto is de snelste van 0 naar 100 kmph",
    "Welke auto heeft de snelste nurburgring tijd?",
    "Welke auto is het zwaarst?",
    "Welke auto heeft het grootste motorblok?",
    "Welke auto heeft de meeste koppel?",
    "Welke auto is het duurst?",
    "Welke auto heeft de hoogste top snelheid?",
    "Welke auto is het oudsts?",
    "Welke auto heeft de meeste versnellingen (automaat)?"
]
var goodAnswer = [
    "f",
    "f",
    "f",
    "m",
    "m",
    "m",
    "f",
    "f",
    "m",
    "m",
]
var infoAnswerLeft = [
    "450PK",
    "4.5 secondes",
    "8:07.000",
    "1680 kg",
    "5.0 V8",
    "542 NM",
    "$60.000",
    "263 km/h",
    "1965",
    "10 speed"
]
var infoAnswerRight = [
    "566PK",
    "3.1 secondes",
    "7:38:000",
    "1,565 kg",
    "4.5 V8",
    "540 NM",
    "$252.340",
    "340 km/h",
    "2009",
    "7 speed"
]
function changeImage(round){
        question.innerHTML = questionText[round];
        leftCar.style.backgroundImage = "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('images/mustang.jpg')";
        rightCar.style.backgroundImage = "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('images/458.jpg')";
}
function checkAnswer(a){
    if(goodAnswer[round] == a){
        score++;
        scoreCounter.innerHTML = score;
        if(round == 9){
            scoreCounter.style.display = "none";
            question.innerHTML = "Gefeliciteerd je hebt gewonnen je eind score is " + score + " punten. Refresh de pagina als je opnieuw wil beginnen";
        }else{
            round++;
            changeImage(round);
        }
    }else{
        scoreCounter.style.display = "none";
        question.innerHTML = "Helaas je hebt verloren met " + score + " punten. Refresh de pagina als je opnieuw wil beginnen";
    }
}

if(round == 0){
    changeImage(round);
}