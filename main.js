let navCover = document.querySelector(".nav-cover");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let link = document.querySelectorAll(".li");

open.addEventListener("click", () => {
  navCover.classList.add("show");
});
close.addEventListener("click", () => {
  navCover.classList.remove("show");
});

link.forEach((li) =>
  li.addEventListener("click", () => {
    navCover.classList.remove("show");
  })
);
