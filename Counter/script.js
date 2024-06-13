let display = document.querySelector(".display");
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let count = 0;
btn1.addEventListener("click", function () {
      count++;
      display.innerHTML = count;
});
btn2.addEventListener("click", function () {
      count = 0;
      display.innerHTML = count;
});
btn3.addEventListener("click", function () {
      count--;
      display.innerHTML = count;
});