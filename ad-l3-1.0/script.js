const colors = ["green", "blue", "red"];

function changeToRandomColor(event) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  event.currentTarget.style.color = colors[randomIndex];
}

document.querySelectorAll("h5").forEach((heading) => {
  heading.addEventListener("click", changeToRandomColor);
});