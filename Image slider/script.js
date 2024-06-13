let boxes = document.querySelectorAll(".box");
let backbtn = document.querySelector(".fa-arrow-left");
let nextbtn = document.querySelector(".fa-arrow-right");
let counter = 0;
// let curElem = 0;

// boxes.addEventListener("click", () => {
//       boxes.forEach((slide, index) => {
//             slide.style.transform = "translateX(0%)";
//       })
//       boxes[index].style.transform = "translateX(-100%)";
//       curElem = index;
// })


boxes.forEach((slide, ind) => {
      slide.style.left = `${ind * 100}%`;
})


let next = () => {
      if (counter >= boxes.length) {
            counter = 0;
      }
      boxes.forEach(element => {
            element.style.transform = `translateX(-${counter * 100}%)`;
      });
}
nextbtn.addEventListener("click", () => {
      counter++;
      next();
})

let prev = () => {
      // counter--;
      if (counter <= 0) {
            counter = 0;
      }
      else {
            counter--;
            // next();
      }
      boxes.forEach(element => {
            element.style.transform = `translateX(-${counter * 100}%)`;
      });
}


backbtn.addEventListener("click", () => {
      prev();
      console.log(counter);
})






// nextbtn.addEventListener("click", function () {
//       boxes[curElem].style.transform = "translateX(100%)";
//       curElem++;
// })
