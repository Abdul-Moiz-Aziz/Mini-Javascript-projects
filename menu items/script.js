let break_btn = document.querySelector(".breakfast-btn");
let lunch_btn = document.querySelector(".lunch-btn");
let dinner_btn = document.querySelector(".dinner-btn");
let all_btn = document.querySelector(".all-btn");
let menu_items = document.querySelectorAll(".menu-items");

all_btn.addEventListener("click", () => {
      menu_items.forEach((elem) => {
            elem.style.display = "flex";
      })
})

break_btn.addEventListener("click", () => {
      menu_items.forEach((elem) => {
            if (elem.classList.contains("breakfast")) {
                  elem.style.display = "flex";
            } else {
                  elem.style.display = "none";
            }
      })
})
lunch_btn.addEventListener("click", () => {
      menu_items.forEach((elem) => {
            if (elem.classList.contains("lunch")) {
                  elem.style.display = "flex";
            } else {
                  elem.style.display = "none";
            }
      })
})
dinner_btn.addEventListener("click", () => {
      menu_items.forEach((elem) => {
            if (elem.classList.contains("dinner")) {
                  elem.style.display = "flex";
            } else {
                  elem.style.display = "none";
            }
      })
})
