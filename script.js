let createdDivsContainer = document.querySelector("#createdDivsContainer");
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")

//Creates the default grid
function defaultCreatedDivs() {
    let createdDivs;
    for (let i = 1; i < 257; i++) {
        createdDivs = document.createElement("div");
        createdDivsContainer.appendChild(createdDivs);
    }
}

//Calls the function that creates the default grid
defaultCreatedDivs();

//Changes the color of grid squares upon mouseover.
function divHoverEffect(event) {
    if (!event.target.classList.contains("divContainerStyling")) {
        event.target.classList.add("hoverColor");
    }
}

//Event listener for mouseover event
createdDivsContainer.addEventListener('mouseover', (event) => {
    divHoverEffect(event);
    console.log(event);
});


//new event listener I am having issues with
button1.addEventListener('click', (event) => {
    clearDivHoverEffect(event);
});
//function that goes with it that is not wanting to work console weirdly enough is not throwing any errors either.
function clearDivHoverEffect() {
    let removeDivClass = document.querySelectorAll("div");
    removeDivClass.forEach(div => {
        div.classList.remove("hoverColor");
    })
};

//Unsure why my loop is not functioning properly but when I click the button afater answering the prompt i get a console error stating unable to remove node as node is not a child of parent node. However the parent is in fact the createdDivsContainer div so I am confused as to why it is throwing me an error which is weird.
//Customer user generated divs function.
function userCreatedDivs(gridSize) {
    gridSize = prompt("Enter the number for your grid size");
    let gridTotal = gridSize * gridSize;
    while (createdDivsContainer.firstChild) {
        createdDivsContainer.removeChild(createdDivsContainer.firstChild);
    }
    for (let i = 1; i < gridTotal; i++) {
        let userDivs = document.createElement("div");
        createdDivsContainer.appendChild(userDivs);
    }
}

//new event listener I am having issues with
button2.addEventListener('click', (event) => {
    userCreatedDivs(event);
    console.log(event);
});

console.log(createdDivs);