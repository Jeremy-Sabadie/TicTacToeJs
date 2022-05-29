//récupération des différents éléments du DOM.
let cases = [...document.getElementsByClassName("case")]; //récupération des éléments de la nodelist dans un tableau.
let JoueurTour = document.getElementById("joueur-tour");
let ScoreJoueur1 = document.querySelector("#score-1");
let ScoreJoueur2 = document.querySelector("#score-2");
let ScoreNul = document.querySelector("#scoreNul");
//initialisation des éléments importants du jeux dans le state pour pouvoi itérer de sus.
let state = {
  joueurEnCours: 1,
  ScoreJoueur1: 0,
  ScoreJoueur2: 0,
  ScorehNul: 0,
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

const ResetState = () => {
  //la fonction reset remet les différents éléments à 0, elle sera appelée après une victoire d'un joueur.
  joueurEnCours: 1;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};
const VerifierVictoire = () => {
  //ici on va vérifier si une des possibilités de victoire est remplie.
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    //si cest le cas, on retourne true.
    return true;
    //Si aucune condition de victoire mais que toutes les cases sont remplies, alors c'est un match nul.
  } else if (
    c1 != 0 &&
    c2 != 0 &&
    c3 != 0 &&
    c4 != 0 &&
    c5 != 0 &&
    c6 != 0 &&
    c7 != 0 &&
    c8 != 0 &&
    c9 != 0
  ) {
    return null; //en cas de match null on retourne null.
  } else {
    // comme en début de partie on ne remplie aucune des conditions la valeur sera false.
    return false;
  }
};

const JouerCase = (e) => {
  let IdCase = e.target.id;
  console.log(IdCase);
  console.log(state.joueurEnCours);
  if (state.joueurEnCours == 1) {
    state.joueurEnCours = 2;
  }

  state.IdCase = state.joueurEnCours;
  let isVictoire = VerifierVictoire();
  if (isVictoire == true) {
    alert("le gagnant est le joueur n°" + state.joueurEnCours);
    if (state.joueurEnCours == 1) {
      state.scoreJ1++;
      ScoreJoueur1.textContent = state.scoreJ1;
    } else {
      state.joueurEnCours == 2;
      state.scoreJ2++;
      ScoreJoueur2.textContent = state.scoreJ2;
    }
    ResetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoire === null) {
    state.matchNuls++;
    ScoreNul.textContent = state.matchNuls;
    JoueurTour.textContent = "1";
    ResetState();
    cases.forEach((c) => (c.textContent = ""));

    ResetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictoire === false) {
    if (state.joueurEnCours == 1) {
      e.target.textContent = "X";
      state.joueurEnCours = 2;
      joueurEnCours.textContent = "2";
    } else {
      e.target.textContent = "O";
      state.joueurEnCours = 1;
      joueurEnCours.textContent = "1";
    }
  }

  cases.forEach((el) => el.addEventListener("click", JouerCase));
};
