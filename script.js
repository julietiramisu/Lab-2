const matchaButton = document.getElementById("matchaButton");
const finishButton = document.getElementById("finishButton");
const matchaImage = document.getElementById("matchaImage");
let imageType = "cafe";
let imageNumber = 1;

matchaButton.addEventListener("click", function () {
  imageType = "matcha";
  imageNumber = 1;
  matchaImage.src = "images/matcha1.jpg";
  matchaImage.alt = "Matcha 1";
  finishButton.hidden = false;
});

finishButton.addEventListener("click", myClickFunction);

matchaImage.addEventListener("click", function () {
  if (imageNumber === 1) {
    imageNumber = 2;
  } else {
    imageNumber = 1;
  }

  matchaImage.src = "images/" + imageType + imageNumber + ".jpg";

  if (imageType === "cafe") {
    matchaImage.alt = "Cafe " + imageNumber;
  } else {
    matchaImage.alt = "Matcha " + imageNumber;
  }
});

function myClickFunction() {
  alert("Yey! Now we have made both cafe latte and matcha!");
}