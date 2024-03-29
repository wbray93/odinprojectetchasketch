let createdDivsContainer = document.querySelector("#createdDivsContainer");

const containerSize = 600;
let squaresPerSide = 16;


createdDivsContainer.style.width = createdDivsContainer.style.height = `${containerSize}px`;


let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")

function createdGrid() {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(containerSize / squaresPerSide) - 2}px`;
    for (let i = 0; i < numOfSquares; i++) {
        const createdDivs = document.createElement("div");

        createdDivs.style.width = createdDivs.style.height = widthOrHeight;

        createdDivsContainer.appendChild(createdDivs);
    }
}

createdGrid();

function divHoverEffect(event) {
    if (!event.target.classList.contains("divContainerStyling")) {
        event.target.classList.add("hoverColor");
    }
}

createdDivsContainer.addEventListener('mouseover', (event) => {
    divHoverEffect(event);
});


//placeholder event listener for mobile friendly interaction.
// createdDivsContainer.addEventListener("", (event) => {
//     divHoverEffect(event);
// });


button1.addEventListener('click', (event) => {
    clearDivHoverEffect(event);
});

button2.addEventListener('click', (event) => {
    userCreatedGrid(event);
    console.log(event);
});


function clearDivHoverEffect() {
    let removeDivClass = document.querySelectorAll("div");
    removeDivClass.forEach(div => {
        div.classList.remove("hoverColor");
    })
};

function userCreatedGrid() {
    squaresPerSide = prompt("Enter the number for your grid size");
    //makes sure users cant put value higher than 100 for performance reasons.
    if (squaresPerSide > 100) {
        squaresPerSide = 16;
    }
    const newNumberOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(containerSize / squaresPerSide) - 2}px`;
    while (createdDivsContainer.firstChild) {
        createdDivsContainer.removeChild(createdDivsContainer.firstChild);
    }

    for (let i = 0; i < newNumberOfSquares; i++) {
        let userDivs = document.createElement("div");
        userDivs.style.width = userDivs.style.height = widthOrHeight;

        createdDivsContainer.appendChild(userDivs);

        userDivs.addEventListener("mouseover", divHoverEffect);
    }
}