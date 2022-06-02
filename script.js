const cases = [...document.getElementsByClassName("case")]; // retrieving the list in a table
//Recovery of the various elements of the DOM.
let joueur = document.getElementById("joueur-tour");
let score1 = document.getElementById("score-1");
let score2 = document.getElementById("score-2");
let scoreNul = document.getElementById("scoreNul");

// Game stats memory.
let state = {
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  matchNul: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};
//Reset the game stats.
const resetState = () => {
  joueurEnCours = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};
//Function that checks the possibility of winning.
const Victory = () => {
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    console.log(state.joueurEnCours + "winner !"); //Display if a win is verified.
    return true; //Rreturn the booléen true if a win is verified.
  } else if (
    //If no win condition is checked but all boxes are filled then it is a null match and we return the boolean Null.
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {
    //If Neither of these two possibilities is verified, we return the Boolean False.
    return false;
  }
};

const PlayCase = (e) => {
  //Here are the instructions that will be given and that will result from the choice of a square by the player
  let idCase = e.target.id; //Retrieval of the id of the clicked box thanks to the .target attribute.

  // If the square is already played, nothing is done.
  if (state[idCase] !== 0) return;

  state[idCase] = state.joueurEnCours; //Here the square is assigned to the player who played it.

  let isVctoire = Victory(); //Here we assign the victory to the player corresponding to the Boolean returned after the verification function.

  if (isVctoire === true) {
    // si victoire

    alert("Le gagnant est le joueur " + state.joueurEnCours);

    if (state.joueurEnCours == 1) {
      state.scoreJ1++;
      score1.textContent = state.scoreJ1;
    } else {
      state.scoreJ2++;
      score2.textContent = state.scoreJ2;
    }

    resetState(); //At the end of the game, the state parameters are reset to zero in order to start a new game.
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVctoire === null) {
    // si nul

    alert("Match nul !"); //Console display in case of a null match.

    state.matchNul++;
    scoreNul.textContent = state.matchNul;
    joueur.textContent = "1";

    resetState();
    cases.forEach((c) => (c.textContent = "")); //Assigning the filling of the played square according to the player.
  } else if (isVctoire === false) {
    // sinon on continue le jeu
    if (state.joueurEnCours == 1) {
      state.joueurEnCours = 2;
      e.target.textContent = "X";
      joueur.textContent = "2";
    } else {
      state.joueurEnCours = 1;
      e.target.textContent = "O";
      joueur.textContent = "1";
    }
  }
};

cases.forEach((el) => {
  el.addEventListener("click", PlayCase); //Lors de l'évènement click , on apelle la fonction PlayCase.
});
