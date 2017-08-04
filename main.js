let mem_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
//Be sure to change this to something way more cool than letters.

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
    let output = '';
    mem_array.memory_card_shuffle();
    for (let i=0; i < mem_array.length; i++){
        output += '<div id="card_'+i+'" onclick="flipCard(this,\''+mem_array[i]+'\')"></div>';
    }
    document.getElementById("memory_board").innerHTML = output;
}

//Had to add event listener so loads on startup
window.addEventListener("load", newGame());

function flipCard(card,val){
    if(card.innerHTML == "" && mem_values.length < 2){
        card.style.background = "green"; //put pictures here
        card.innerHTML = val;
        if(mem_values.length == 0){
            mem_values.push(val);
            mem_card.push(card.id);
        } else if( mem_array.length == 1){
            mem_values.push(val);
            mem_card.push(card.id);
            if(mem_values[0] == mem_values[1]){
                flipped_cards += 2;
                mem_values = [];
                mem_card = [];
            }
        }
        
    }
}