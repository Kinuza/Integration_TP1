let prev = document.getElementById("prev");
let next = document.getElementById("next");
let diapo = document.getElementById("diapo");
let compteur = 0;

next.addEventListener("click", nextSlide, false);

function nextSlide() {

  compteur++;
  if (compteur === 3) {
    compteur = 0;
  }

  displayImg();

}

function displayImg() {
    image.src = "static/img/" + compteur + ".jpg";
  }
  
  prev.addEventListener("click", prevSlide, false);

  function prevSlide() {
  
    compteur--;
    if (compteur === -1) {
      compteur = 2;
    }
  
    displayImg();
  
  }
  
  function displayImg() {
      image.src = "static/img/" + compteur + ".jpg";
    }
  

  