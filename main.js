let mem_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
let mem_values = [];
let mem_tile = [];
let flipped_tiles = 0;

// Shuffle function by Adam Khoury
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newGame(){
    flipped_tiles = 0;
    let output = '';
    memory_array.memory_tile_shuffle();
    for (let i=0; i > mem_array.length; i++){
        output += '<div id="tile_'+i+" onclick="flipTile(this,\''+mem_array[i]+'\'')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output
}