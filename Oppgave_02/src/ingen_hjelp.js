//import './styles.css';
import { users } from './util.js';

// TODO: Hent HTML #id med getElementById
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const usersUl = document.getElementById("users");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const getUsers = () => {
    users.forEach(user => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(user.name + ", " + user.age))
        usersUl.appendChild(li);
    })
}

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearch = (name) => {
    const userList = usersUl.querySelectorAll("li");
    userList.forEach(user => {
        const userData = user.textContent.split(", ")
        const userName = userData[0].toLowerCase();
        name = name.toLowerCase();
        if (!userName.includes(name)) {
            user.setAttribute("hidden", "hidden");
        }
    })
}

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const unFilter = () => {
    const userList = usersUl.querySelectorAll("li");
    userList.forEach(user => {
        user.removeAttribute("hidden")
    })
}

const handleFilter = (age) => {
    const userList = usersUl.querySelectorAll("li");
    userList.forEach(user => {
        const userData = user.textContent.split(", ")
        const userAge = userData[1];
        if (userAge < age) {
            user.setAttribute("hidden", "hidden");
        }
    })
}

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
nameInput.addEventListener("input", () => {
    unFilter();
    handleSearch(nameInput.value);
})

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener("click", () => {
    unFilter();
    handleFilter(ageInput.value);
})

getUsers();