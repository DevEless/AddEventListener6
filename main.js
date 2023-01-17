// Etape 1
let myDiv = document.getElementById("content");
let myParagraph = document.querySelector("p");
let myH1 = document.querySelectorAll('h1')[0];
let myH2 = document.querySelectorAll('h1')[1];

myDiv.addEventListener("click", function (e) {
    // Mettre une bordure à la div
    e.target.style.border = "1px solid black";

    // Mettre le paragraphe en gras et en rouge
    myParagraph.style.fontWeight = "bold";
    myParagraph.style.color = "red";

    // Surligné le h1
    myH1.style.backgroundColor = "yellow";

    // Effacer le h2, à chaque fois que l'on clique dessus il perd une lettre.
    if (e.target === myH2) {
        myH2.innerHTML = myH2.innerHTML.slice(0, -1);
    }
});


let hoverText = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
let mySection = document.getElementById("mySectionId");

mySection.addEventListener("mouseover", function () {
    mySection.innerHTML += "<p>" + hoverText + "</p>";
});