
const gridContainer = document.getElementById('container');

// seleziona i bottoni perdifficoltà
const easyBtn = document.getElementById("btnEasy");
const mediumBtn = document.getElementById("btnMedium");
const hardBtn = document.getElementById("btnHard");


let difficultyNum = '';

let gameInProgress = true;
let points = 0;

// selezionare gli alert per vittoria e sconfitta
const loseAlert = document.getElementById('lose');
const winAlert = document.getElementById('win');

easyBtn.addEventListener('click', 
    function() {
      resetGame();
      difficultyNum = 100;
      gridDifficulty(difficultyNum, "squareEasy")
      squareClick('[class^="square"]', 'bombPlace')
    }
);

mediumBtn.addEventListener('click', 
    function() {
      resetGame();
      difficultyNum = 81;
      gridDifficulty(difficultyNum, "squareMedium") 
      squareClick('[class^="square"]', 'bombPlace')
    }
    
);

hardBtn.addEventListener('click', 
    function() {
      resetGame();
      difficultyNum = 49;
      gridDifficulty(difficultyNum, "squareHard");
      squareClick('[class^="square"]', 'bombPlace');
    }
);



// FUNZIONI -----

// genera il quadrato
function squareGenerator(x, y) {
    let gridSquare = document.createElement(x);
    gridSquare.classList.add(y);
    return gridSquare
}

// genera la griglia di quadrati a seconda della difficoltà
function gridDifficulty(x, y) {
    for (let i = 0; i < x; i++) {
        let newElem = squareGenerator("div", y);
        gridContainer.appendChild(newElem);
    }

    // genera i quadrati con il numero all'interno
    let squareSelector = document.querySelectorAll('[class^="square"]');
    let squareArr = [];
    for (let i = 0; i < squareSelector.length; i++) {
        squareSelector[i].innerText = i + 1;
        squareArr.push(i + 1);
    }
    console.log(squareSelector);

    // genera l'array per le bombe
    let bombArray = [];
    while (bombArray.length < 16) {
        let bombNum = Math.floor(Math.random() * difficultyNum) + 1;
        if (bombArray.includes(bombNum) == false) {
            bombArray.push(bombNum);
        }
    }
    console.log(bombArray);

    
    for (i = 0; i < squareArr.length; i++) {
        if (bombArray.includes(squareArr[i]))
        squareSelector[i].classList.add('bombPlace');
    }
}



// click sul singolo quadratino
function squareClick(x, y) {
  let squareSelector = document.querySelectorAll(x);
  let bombSelector = [];
  console.log(squareSelector);

  for (let i = 0; i < squareSelector.length; i++) {
      if (squareSelector[i].classList.contains(y)) {
          bombSelector.push(squareSelector[i]);
      }
  }
  
  console.log(bombSelector);

  for (let i = 0; i < squareSelector.length; i++) {
      function activeClick() {
          if (gameInProgress) {
              squareSelector[i].classList.add('active');
              points++;

              if (points == difficultyNum - 16) {
                  winAlert.style.display = 'block';
                  winAlert.innerHTML = `Hai vinto! Hai evitato tutte le bombe ottenendo ${points} punti.`
              }

              console.log(points);
              squareSelector[i].removeEventListener('click', activeClick);
          }
      }

      if (squareSelector[i].classList.contains(y)) {
          squareSelector[i].addEventListener('click', function() {
              if (gameInProgress) {
                  for (let i = 0; i < bombSelector.length; i++) {
                      bombSelector[i].classList.add('bomb');
                  }
                  gameInProgress = false; // Imposta lo stato del gioco su "false" quando l'utente perde.
                  loseAlert.style.display = 'block';
                  loseAlert.innerHTML = `Hai perso! Il tuo punteggio è ${points}`;
                  const bombSound = document.getElementById('bomb-sound');
                  bombSound.play();
                  
                  // Disabilita tutte le celle rimanenti
                  squareSelector.forEach((cell) => {
                      cell.removeEventListener('click', activeClick);
                      cell.style.cursor = 'not-allowed';
                  });
              }
          });
      } else {
          squareSelector[i].addEventListener('click', activeClick);
      }
  }
}

function resetGame() {
  gameInProgress = true;
  points = 0;
  loseAlert.style.display = 'none';
  winAlert.style.display = 'none';
  gridContainer.innerHTML = "";
}



