//import './styles.css';
import { words } from "./util.js"

// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
let numberOfWrongs = 0;
let word = "";

// TODO: Lag en liste med ulike ord

// TODO: Hent ut HTML #id og knappen
const wordDisplay = document.getElementById("word");
const letterDsiplay = document.getElementById("letter");
const wrongs = document.getElementById("wrongs");
const startBtn = document.getElementById("start");

// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
const newWord = ()  => {
    word = words.splice(Math.floor(Math.random() * words.length), 1);
    if (word == "") {
        wordDisplay.innerHTML = "No more words left!"
    } else {
        wordDisplay.innerHTML = word;
    }
    console.log(word)
}

// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene


// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
startBtn.addEventListener("click", () => {
    newWord();
})