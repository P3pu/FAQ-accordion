const item = document.querySelectorAll(".item");

item.forEach((item) => {
  const answer = item.querySelector(".answer");

  const img = item.querySelector(".imageQuestions");

  item.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.display = "block";
      img.src = "/assets/images/icon-minus.svg";
    } else {
      answer.style.display = "none";
      img.src = "/assets/images/icon-plus.svg";
    }
  });
});
