let createdDivsContainer = document.querySelector("#createdDivsContainer");
let createdDivs;

function defaultCreatedDivs() {
    for (i = 1; i < 257; i++) {
        createdDivs = document.createElement("div");
        createdDivsContainer.appendChild(createdDivs);
    }
}

defaultCreatedDivs();

function divHoverEffect(event) {
    if (!event.target.classList.contains("divContainerStyling")) {
        event.target.classList.add("hoverColor");
    }
}

createdDivsContainer.addEventListener('mouseover', (event) => {
    divHoverEffect(event);
    console.log(event);
});

function userCreatedDivs(num) {
    createdDivsContainer.append(num);
}