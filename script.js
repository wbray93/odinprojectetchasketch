const createdDivsContainer = document.querySelector("#createdDivsContainer");
let createdDivs;

function defaultCreatedDivs() {
    for (i = 1; i < 257; i++) {
        createdDivs = document.createElement("div");
        createdDivsContainer.appendChild(createdDivs);
    }
}

defaultCreatedDivs();

function userCreatedDivs(num) {
    createdDivsContainer.append(num);
}