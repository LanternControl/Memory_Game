let mem_array = [ '<img src= Photos/Cytotoxin.jpg>', '<img src= Photos/Cytotoxin.jpg>', '<img src= Photos/Archspire.jpg>', '<img src= Photos/Archspire.jpg>', '<img src= Photos/Aversions_Crown.jpg>', '<img src= Photos/Aversions_Crown.jpg>', '<img src= Photos/Carnifex.jpg>', '<img src= Photos/Carnifex.jpg>', '<img src= Photos/Cattle_Decap.jpg>', '<img src= Photos/Cattle_Decap.jpg>', '<img src= Photos/Rings_of_Saturn.jpg>', '<img src= Photos/Rings_of_Saturn.jpg>', '<img src= Photos/Lorna_Shore.jpg>', '<img src= Photos/Lorna_Shore.jpg>', '<img src= Photos/Vulvodynia.jpg>', '<img src= Photos/Vulvodynia.jpg>', '<img src= Photos/Ingested.jpg>', '<img src= Photos/Ingested.jpg>', '<img src= Photos/Cytotoxin.jpg>', '<img src= Photos/Cytotoxin.jpg>'];

let mem_values = [];
let mem_card = [];
let flipped_cards = 0;
// Shuffle function by Adam Khoury
Array.prototype.memory_card_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
// for new game, also creates divs for individual tiles
function newGame(){
    flipped_cards = 0;
    let output = "";
    mem_array.memory_card_shuffle();
    for (let i = 0; i < mem_array.length; i++){
        output += '<div id="card_'+i+'" onclick="flipCard(this,\''+mem_array[i]+'\')"></div>';
    }
    document.getElementById("memory_board").innerHTML = output;
}
function flipCard(card,val){
    if(card.innerHTML == "" && mem_values.length < 2){
        card.style.background = ""; //put pictures here
        card.innerHTML = val;
        if(mem_values.length == 0){
            mem_values.push(val);
            mem_card.push(card.id);
        } else if(mem_values.length == 1){
            mem_values.push(val);
            mem_card.push(card.id);
            if(mem_values[0] == mem_values[1]){
                flipped_cards += 2;
                mem_values = [];
                mem_card = [];
            if(flipped_cards == mem_array.length){
                alert("You rock!!!");
                document.getElementById("memory_board").innerHTML == "";
                newGame();
            }
        } else {
            function flipBack(){
                let card_1 = document.getElementById(mem_card[0]);
                let card_2 = document.getElementById(mem_card[1]);
                //insert background
                card_1.style.background = "";
                card_1.innerHTML = "";
                card_2.style.background = "";
                card_2.innerHTML = "";
                mem_values = [];
                mem_card = [];
            }
            setTimeout(flipBack, 700);
            }
        }
    }
}

// made crude timer
let clock = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = minute + ":" + seconds;
}





//Had to add event listener so loads on startup
window.addEventListener("load", newGame());