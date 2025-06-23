const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("mouseover", () => {
  const containerWidth = questionContainer.offsetWidth - noBtn.offsetWidth;
  const containerHeight = questionContainer.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * containerWidth);
  const newY = Math.floor(Math.random() * containerHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play(); // make sure .gif-result is a <video> or remove this line if using <img>
  }, 2000);
});
