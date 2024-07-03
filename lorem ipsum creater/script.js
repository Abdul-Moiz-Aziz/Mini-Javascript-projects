let input = document.getElementById("paragraphCount");
let generate_btn = document.querySelector(".btn");
let output = document.getElementById("output");

let text = [
/* first para*/"This biographical article related to French artistic gymnastics is a stub. You can help Wikipedia by expanding it. InsideAR was the largest Augmented Reality event in Europe. It was organized and supported by metaio GmbH every year. The first event was held in 2010, had since expanded globally and was run at multiple locations around the world. However, after Apple purchased metaio in May 2015, metaio cancelled the InsideAR conference 2015 without any statements about the conference's future.",

/* secong para */ "The Fearing Mind is an American horror television series that aired on the Fox Family Channel from October 21 until December 2, 2000. Bill Fearing, a famous writer of suspense thrillers, gets his ideas from things that happen in his family.When he gets an idea, the viewers enter his mind and see the gruesome events unfold.",

/* third para */ "It had a bronze barrel and lacked a modern recoil system, using only an ineffective spring-mounted spade brake, and was virtually obsolescent on its introduction. Nonetheless, it was the standard field howitzer for the Austrian Army at the outbreak of the war. Lithuanian Paralympic Committee(Lithuanian: Lietuvos parolimpinis komitetas) was founded on 1990 and recognized by the International Paralympic Committee after one year.",

/* fourth para*/ "A GUI may be designed for the requirements of a vertical market as application-specific graphical user interfaces. Examples include automated teller machines (ATM), point of sale (POS) touchscreens at restaurants, self-service checkouts used in a retail store, airline self-ticket and check-in, information kiosks in a public space, like a train station or a museum, and monitors or control screens in an embedded industrial application which employ a real-time operating system (RTOS).",

/* fifth para*/ "A series of elements conforming a visual language have evolved to represent information stored in computers. This makes it easier for people with few computer skills to work with and use computer software. The most common combination of such elements in GUIs is the windows, icons, menus, pointer (WIMP) paradigm,especially in personal computers.",

/* sixth para*/ "In personal computers, all these elements are modeled through a desktop metaphor to produce a simulation called a desktop environment in which the display represents a desktop, on which documents and folders of documents can be placed. Window managers and other software combine to simulate the desktop environment with varying degrees of realism. Entries may appear in a list to make space for text and details, or in a grid for compactness and larger icons with little space underneath for text.Variations inbetween exist, such as a list with multiple columns of items and a grid of items with rows of text extending sideways from the icon.",

/* seventh para*/ "The desktop metaphor is a metaphor for a desktop environment in which the display represents a desktop, on which documents and folders of documents can be placed. Window managers and other software combine to simulate the desktop environment with varying degrees of realism.",

/* eight para*/ "There are also actions performed by programs that affect the GUI. For example, there are components like inotify or D-Bus to facilitate communication between computer programs. GUIs were a hot topic in the early 1980s.The Apple Lisa was released in 1983, and various windowing systems existed for DOS operating systems(including PC GEM and PC / GEOS).Individual applications for many platforms presented their own GUI variants.",

/* ninth para*/ "In 1984, Apple released a television commercial which introduced the Apple Macintosh during the telecast of Super Bowl XVIII by CBS, with allusions to George Orwell's noted novel Nineteen Eighty-Four. The goal of the commercial was to make people think about computers, identifying the user-friendly interface as a personal computer which departed from prior business-oriented systems, and becoming a signature representation of Apple products. Windows 95, accompanied by an extensive marketing campaign, was a major success in the marketplace at launch and shortly became the most popular desktop operating system.",

/* ten para */ "In 2007, with the iPhone and later in 2010 with the introduction of the iPad,  Apple popularized the post-WIMP style of interaction for multi-touch screens, and those devices were considered to be milestones in the development of mobile devices."
]


generate_btn.addEventListener("click", function () {
      output.innerHTML = "";
      let paragraphCount = parseInt(input.value);

      if (isNaN(paragraphCount) || paragraphCount === "" || paragraphCount < 0) {
            return alert("Please enter a valid number");
      }

      else if (paragraphCount > 0 && paragraphCount <= text.length) {
            output.style.height = "60vh";
            for (let i = 0; i < paragraphCount; i++) {
                  let para = document.createElement("p");
                  para.classList.add("para");
                  para.innerHTML = text[i];
                  output.appendChild(para);
            }
      }

      else {
            alert("Please enter a number between 1 and 10");
      }
});