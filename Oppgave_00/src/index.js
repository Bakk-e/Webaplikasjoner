// Oppgave 1
const removeBtn = document.getElementById("remove-btn");
const removeText = document.getElementById("remove");

removeBtn.addEventListener("click", () => {
    removeText.remove();
});

// Oppgave 2
const changeBtn = document.getElementById("change-btn");
const changeText = document.getElementById("change")

changeBtn.addEventListener("click", () => {
    changeText.innerHTML = "Text was changed";
});

// Oppgave 3
const inputBox = document.getElementById("input")
const inputText = document.getElementById("input-text");

inputBox.addEventListener("input", () => {
    inputText.innerHTML = inputBox.value
})

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const writeListBtn = document.getElementById("write-list");
const ul = document.getElementById("ul");
let counter = 0;

writeListBtn.addEventListener("click", () => {
    myList.forEach(element => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(myList[counter]))
        ul.appendChild(li);
        counter++;
    });
})

// Oppgave 5
const selector = document.getElementById("select");
const inputTextOp5 = document.getElementById("text");
const createBtn = document.getElementById("create");
const placeholderDiv = document.getElementById("placeholder")

createBtn.addEventListener("click", () => {
    const element = document.createElement(selector.value);
    element.innerHTML = inputTextOp5.value;
    placeholderDiv.appendChild(element);s
})

// Oppgave 6
const list = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");

removeLiBtn.addEventListener("click", () => {
    const elements = document.getElementById("list").querySelectorAll("li");
    const li = elements[elements.length - 1];
    li.parentElement.removeChild(li);
})

// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");
let shorterThan4 = true;

inputName.addEventListener("input", () => {
    if (inputName.value.length > 4) {
        orderBtn.style.borderColor = "red"
        shorterThan4 = false;
    } else {
        orderBtn.style.borderColor = "black"
        shorterThan4 = true;
    }
})

orderBtn.addEventListener("click", () => {
    if (shorterThan4) {
        inputName.value = ""
    }
})

// Oppgave 8
const liElements = document.getElementsByClassName("children").item("ul").querySelectorAll("li");
const colorBtn = document.getElementById("color");
let counter2 = 1;

colorBtn.addEventListener("click", () => {
    console.log(liElements);
    console.log(liElements.length)
    liElements.forEach(element => {
        if (counter2 % 2 == 0) {
            element.style.color = "pink"
            console.log("done")
        } else {
            element.style.color = "green"
            console.log("done")
        }
        counter2++;
    })
})