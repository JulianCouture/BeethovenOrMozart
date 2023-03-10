window.addEventListener('load', (event) => {
    setNewAudioFile();
});

document.getElementById("lost").style.display = "none";
let composerArray = ["mozart","beethoven"];
let currentComposer = "mozart";
let score = 0;
let strikes = [];

function selectComposer(array) {
    currentComposer = array[Math.floor(Math.random() * 2)]
}

function setNewAudioFile(){
    selectComposer(composerArray);
    let audioFileNumber = Math.floor(Math.random() * 11) + 1;
    //let audioFileNumber = Math.floor(Math.random() * 12);
    let audioFileName = currentComposer +audioFileNumber + ".mp3";
    document.getElementById('audio').setAttribute('src', 'audiofiles/' + audioFileName);


}

function guess(string) {
    if(string === currentComposer) {
        document.getElementById("correct").textContent = "Correct Answer!";
        score++;
        document.getElementById("score").textContent = score;
        setNewAudioFile();
    }
    else{
        document.getElementById("correct").textContent = "Wrong Answer!";
        strikes.push('x');
        document.getElementById("strikes").textContent = strikes;
        setNewAudioFile();
        if(strikes.length === 3){
            lost();
            //alert("\n\n\nyou lost!\n\nYOUR SCORE WAS: " +score+ "\n\nplease reload the page... I haven't created a new game feature yet...")
        }
    
    }
}
function lost() {
    document.getElementById("game").style.visibility = "hidden";
    document.getElementById("lost").style.display = "block";
    document.getElementById('finalscore').textContent = score;

}
function newGame() {
    setNewAudioFile();
    score = 0;
    strikes = [];
    document.getElementById("strikes").textContent = strikes;
    document.getElementById("score").textContent = score;
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("lost").style.display = "none";
    document.getElementById("correct").textContent = "";


}
/*
function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }

//console.log(document.getElementById('para'));

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    console.log('realdoc: ', document.getElementById('para'));

  });
  */