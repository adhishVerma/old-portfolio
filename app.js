(function () {
  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById("site-header");

  var checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      //replace 52 with the height of your header in px

      header.classList.add("hide");
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove("hide");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();

const projects = document.getElementById("project-grid");

fetch("./static/data.json").then((res) => res.json()).then(data => 
    {
        data.forEach((project, i) => {
            
                let card = `<div class="card" style="background:hsl(${
                  Math.random() * 360
                }, 100%, 50%)">
                <img src="http://source.unsplash.com/random/?sig=${i}" alt=""/>
                <div class="project-info">
                <p class="project-title">${project.title}</p>
                <div class="project-link"><a href="${project.link}" target="blank_">Project-link</a></div></div>
                </div>`;
              
                projects.innerHTML += card;
              
        })
    }
    )

// for (let i = 0; i < 7; i++) {
//   let card = `<div class="project-card-container"><div class="card" style="background:hsl(${
//     Math.random() * 360
//   }, 100%, 50%)">
//   <img src="http://source.unsplash.com/random/?sig=${i}" alt=""/>
//   </div>
//   <p class="project-title">lorem ipsum dolor sit</p>
//   <div class="project-link">Project Link</div>
//   </div>`;

//   projects.innerHTML += card;
// }

projects.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const decX = mouseX/window.innerWidth
  const decY = mouseY/window.innerHeight
  const maxX = (projects.offsetWidth - window.innerWidth)
  const maxY = (projects.offsetHeight - window.innerHeight)/2.5

  const panX = (-1)*maxX*decX
  const panY = (-1)*maxY*decY


  projects.animate(
    {
      translate:`${panX}px ${panY}px`
    },
    {
      duration:3000,
      easing:"ease",
      fill:"forwards"
    }
  )

});
