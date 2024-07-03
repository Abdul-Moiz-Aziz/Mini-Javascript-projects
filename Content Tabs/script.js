let arr = [
      {
            "src": "person1.jpeg",
            "name": "Micheal",
            "description": "Michael is a dynamic and innovative individual known for his exceptional problem-solving skills and creative approach to challenges.With a strong background in both technology and business, he effortlessly bridges the gap between technical solutions and strategic objectives.His enthusiasm for continuous learning and adaptability makes him a valuable asset in any team."
      },
      {
            "src": "person2.jpeg",
            "name": "Hena",
            "description": "Hena is a dedicated and innovative professional known for her exceptional analytical skills and creative problem- solving abilities.With a robust background in data analysis and project management, she excels in transforming complex data into actionable insights and driving projects to successful completion.Hena's strategic mindset and attention to detail enable her to identify opportunities for improvement and implement effective solutions."
      },
      {
            "src": "person3.jpeg",
            "name": "Jane",
            "description": "Jane is a seasoned project manager with a knack for leadership and a passion for optimizing processes. With a background in project management and a knack for detail, she excels in orchestrating complex initiatives and ensuring their successful execution. Jane's strategic thinking and analytical mindset enable her to identify opportunities for growth and improvement, making her a valuable asset to any organization. "
      },
      {
            "src": "person4.jpeg",
            "name": "Adda",
            "description": "Adda is a highly skilled and motivated professional known for her expertise in technology and software development.With a strong foundation in computer science and extensive experience in coding and system design, she excels in creating innovative solutions and optimizing existing systems.Adda's analytical mindset and attention to detail enable her to tackle complex technical challenges with ease."
      }
]

let name = document.querySelector(".name");
let desc = document.querySelector(".para-description");
let image = document.querySelector(".image");

let tab_btns = document.querySelector(".tab-btns");

tab_btns.addEventListener("click", (e) => {
      if (e.target === tab_btns) {
            tab_btns.style.backgroundColor = "#f0f0f0";
      }

      else {
            document.querySelectorAll(".btn-click").forEach(button => {
                  button.classList.remove("btn-click");
            });

            e.target.classList.add("btn-click");
            if (e.target.classList.contains("mic-btn")) {
                  name.innerText = arr[0].name;
                  desc.innerText = arr[0].description;
                  image.src = arr[0].src;
            }
            else if (e.target.classList.contains("fra-btn")) {
                  name.innerText = arr[1].name;
                  desc.innerText = arr[1].description;
                  image.src = arr[1].src;
            }
            else if (e.target.classList.contains("jane-btn")) {
                  name.innerText = arr[2].name;
                  desc.innerText = arr[2].description;
                  image.src = arr[2].src;
            }
            else if (e.target.classList.contains("john-btn")) {
                  name.innerText = arr[3].name;
                  desc.innerText = arr[3].description;
                  image.src = arr[3].src;
            }
      }
})