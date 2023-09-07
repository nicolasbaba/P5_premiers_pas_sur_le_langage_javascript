const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
    }
];


///////// arrowRight equivaut a la class .arrow_right
const arrowRight = document.querySelector(".arrow_right")

////////arrowLeft equivaut a la class .arrow_left
const arrowLeft = document.querySelector(".arrow_left")

////////dotsContainer equivaut a la class .dots
const dotsContainer = document.querySelector(".dots");

///////// image equivaut a la class .banner-img
let image = document.querySelector(".banner-img")

//////// text equivaut a la l'id #banner p 
let text = document.querySelector("#banner p")

///////// Compter le nombre de diapositives contenue dans la variable liste slides
const numberSlides = slides.length;




///////// Créer les points dans le <div> dots
for (let i = 0; i < numberSlides; i++) {
    const dot = document.createElement("div")
    dot.classList.add("dot")

    ///////// Si le point correspond à la diapositive en cours de visionnage, ajouter la classe "dot_selected"
    if (i === 0) {
        dot.classList.add("dot_selected")
    }

    ///////// Ajouter le point au conteneur
	dotsContainer.appendChild(dot)
}


///////// Initialiser l'index de la diapositive en cours de visionnage
let currentSlideIndex = 0

/////////evenement au clique sur la fleche droite
arrowRight.addEventListener("click", () => {
	console.log("vous avez cliqué sur la fleche de droite")


    //////// Incrémenter l'index de la diapositive
    currentSlideIndex++

    /////// Si l'index dépasse la dernière diapositive, le remettre à 0
    if (currentSlideIndex >= numberSlides) {
        currentSlideIndex = 0
    }

    /////// Mettre à jour le point actif
	dotsContainer.querySelector(".dot_selected").classList.remove("dot_selected");
	dotsContainer.children[currentSlideIndex].classList.add("dot_selected")

	 /////// Mettre à jour l'image
    image.src = slides[currentSlideIndex].image

    /////// Mettre à jour le texte
    text.innerHTML = slides[currentSlideIndex].tagLine

});



///////// evenement au clique sur la felche gauche 
arrowLeft.addEventListener("click", () => {
	console.log("vous avez cliqué sur la fleche de gauche")

	/////// Décrémenter l'index de la diapositive
	currentSlideIndex--

	/////// Si l'index est inférieur à 0, le remettre à la dernière diapositive
	if (currentSlideIndex < 0) {
		currentSlideIndex = numberSlides - 1
	}

	/////// Mettre à jour le point actif
	dotsContainer.querySelector(".dot_selected").classList.remove("dot_selected");
	dotsContainer.children[currentSlideIndex].classList.add("dot_selected")

    /////// Mettre à jour l'image
    image.src = slides[currentSlideIndex].image

    /////// Mettre à jour le texte
    text.innerHTML = slides[currentSlideIndex].tagLine

})


