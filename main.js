const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

/* Looping through images */
for (let i = 0; i < 5; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `/images/pic${i + 1}.jpg`);
  newImage.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.src);
  });
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  const buttonClass = btn.getAttribute("class");
  if (buttonClass === "dark") {
    btn.setAttribute("class", "light");
    overlay.style.background = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
