const windowwidth = window.outerWidth;
let img = document.getElementsByClassName("image");
counter = 1;
for (let i = 0; i < img.length; i++) {
  img[i].width = windowwidth;
}
const slider = document.querySelector(".imageslider");
const nxtbtn = document.querySelector("#nxtbtn");
const prevbtn = document.querySelector("#prevbtn");
slider.style.transform = "translateX(" + -windowwidth * counter + "px)";
nxtbtn.addEventListener("click", () => {
  if (counter >= img.length - 1) return;
  slider.style.transition = " transform 0.6s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -windowwidth * counter + "px)";
});
prevbtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = " transform 0.6s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -windowwidth * counter + "px)";
});
slider.addEventListener("transitionend", () => {
  if (img[counter].id == "lastimage") {
    slider.style.transition = "none";
    counter = img.length - 2;
    slider.style.transform = "translateX(" + -windowwidth * counter + "px)";
  }
  if (img[counter].id == "firstimage") {
    slider.style.transition = "none";
    counter = img.length - counter;
    slider.style.transform = "translateX(" + -windowwidth * counter + "px)";
  }
});
