var memory_array =
['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
//variable holds the values of the cards that are currently flipped
var memory_values = [];
//holds the ids of the cards that are flipped. Needed so you can set them back to unflipped if there's no match
var memory_tile_ids = [];
var tiles_flipped = 0;

//newBoard function runs every time page loads, will generate all cards as little div's
function newBoard() {
  tiles_flipped = 0;
  memory_array = _.shuffle(memory_array);
  var output = '';
  _.forEach(memory_array, function(memory_array_value, index) {
    output += '<div id="tile_' + index + '" onclick="flipTile(this,\'' + memory_array_value + '\')"></div>';
    // output = <div id="tile_0" onclick="memoryFlipTile(this,'D')"></div>
  });
  document.getElementById('memory_board').innerHTML = output;
}

function flipTile(tile, value) {
  if (canFlipCard(tile)) {
    flipCard(tile, value);
    if (noCardsFlipped()) {
      setCardAsFlipped(tile, value);
    } else if(oneCardFlipped()) {
      setCardAsFlipped(tile, value);
      if (cardsMatch(tile, value)) {
        matchCards(tile, value);
        if (isGameOver()) {
          gameOver();
        }
      } else {
        noMatch();
      }
    }
  }
}

function canFlipCard(tile) {
  return tile.innerHTML == '' && memory_values.length < 2;
}

function flipCard(tile, value) {
  tile.innerHTML = value;
  tile.style.background = '#FFF';
}

function noCardsFlipped() {
  return memory_values.length == 0;
}

function oneCardFlipped() {
  return memory_values.length == 1;
}

function setCardAsFlipped(tile, value) {
  memory_values.push(value);
  memory_tile_ids.push(tile.id);
}

function cardsMatch(tile, value) {
  return memory_values[0] == memory_values[1];
}

function matchCards(tile, value) {
  tiles_flipped += 2;
  memory_values = [];
  memory_tile_ids = [];
}

function noMatch() {
  setTimeout(flipCardBack, 700);
}

function isGameOver() {
  return tiles_flipped == memory_array.length;
}

function gameOver() {
  document.getElementById('memory_board').innerHTML = '';
  newBoard();
}

function flipCardBack() {
  var tile_1 = document.getElementById(memory_tile_ids[0]);
  var tile_2 = document.getElementById(memory_tile_ids[1]);
  tile_1.innerHTML = '';
  tile_1.style.background = 'rgb(120, 232, 144)';
  tile_2.innerHTML = '';
  tile_2.style.background = 'rgb(120, 232, 144)';
  memory_values = [];
  memory_tile_ids = [];
}
