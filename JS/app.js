//variabels
const myElements = document.querySelectorAll(".xl");
const myElements2 = document.querySelectorAll(".y");
const myElements3 = document.querySelectorAll(".xr");

//variabels für animation

//ende variabels für animation

const scrollbtn = document.getElementById('scrollbtn');
const square = document.getElementById('square-1');
const left_side = document.getElementById('left-side');
const right_side = document.getElementById('right-side');

//einstellungen
const gear = document.getElementById('gear');
const einstellungen = document.getElementById('einstellungen');
const color_container = document.getElementById('colorcontainer');
const playercontainer = document.getElementById('playercontainer');



//theme ändern variabln
const darktheme = document.getElementById('darktheme');
const purbeltheme = document.getElementById('purbeltheme');
const mainseite = document.getElementById('mainseite');
//teambox
const teambox1 = document.getElementById('teambox1');
const teambox2 = document.getElementById('teambox2');
const teambox3 = document.getElementById('teambox3');



//Ende variabels


//einstellungen
function show_einstellungen() {
  gear.addEventListener('click', () => {
    console.log("gear clicked");
    color_container.classList.toggle('active-color-container');
  })
}
//set_darktheme
function set_darktheme() {
  darktheme.addEventListener('click', () => {
    console.log("clickedset_darktheme()");
    mainseite.classList.add('bg-dark');
    mainseite.classList.remove('bg-animation');
    //teamadd
    teambox1.classList.add('dark');
    teambox1.classList.remove('purple');
    teambox2.classList.add('dark');
    teambox3.classList.add('dark');

    //teamremove

    teambox2.classList.remove('purple');
    teambox3.classList.remove('purple');
    color_container.classList.remove('active-color-container');
  })
}
//set_purbel_theme
function set_purbel_theme() {
  purbeltheme.addEventListener('click', () => {
    console.log("clicked set_purbel_theme()");
    mainseite.classList.add('bg-animation');
    mainseite.classList.remove('bg-dark');
    teambox1.classList.add('purple');
    teambox2.classList.add('purple');
    teambox3.classList.add('purple');

    teambox1.classList.remove('dark');
    teambox2.classList.remove('dark');
    teambox3.classList.remove('dark');

    color_container.classList.remove('active-color-container');


  })
}




// an bestimmten y was machen
function show_button() {
  window.onscroll = function () {

    console.log("scrollY= " + this.scrollY);
    //show scrollbtn an y > 140
    this.scrollY > 140 ? scrollbtn.classList.add("show") : scrollbtn.classList.remove("show");
    //show square an y > 205
    this.scrollY > 205 && this.scrollY < 690 ? square.style.cssText = "transition: all 1s ease-out; opacity: 0.7; " : square.style.cssText = "transition: all 1s ease-out;opacity: 0";
    //hidden square an y > 140
    this.scrollY > 140 ? einstellungen.classList.add("hidden") : einstellungen.classList.remove("hidden");

  }
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      // Element is now visible in the viewport
      if (entry.target.classList.contains("xl")) {
        entry.target.classList.add("slide-in-xl");
      }  if (entry.target.classList.contains("y")) {
        entry.target.classList.add("slide-in-y");
      } if (entry.target.classList.contains("xr")) {
        entry.target.classList.add("slide-in-xr");
      }
      /*
       if (entry.target.classList.contains("yb")) {
        entry.target.classList.add("slide-in-y-button");
      }
      if (entry.target.classList.contains("xl")) {
        entry.target.classList.add("slide-in-x-left");
      }
      if (entry.target.classList.contains("xr")) {
        entry.target.classList.add("slide-in-x-right");
      }*/
    } else {
      // Element is no longer visible in the viewport
      if (entry.target.classList.contains("xl")) {
        entry.target.classList.remove("slide-in-xl");
      }  if (entry.target.classList.contains("y")) {
        entry.target.classList.remove("slide-in-y");
      }if (entry.target.classList.contains("xr")) {
        entry.target.classList.remove("slide-in-xr");
      } 
      /*
       if (entry.target.classList.contains("yb")) {
        entry.target.classList.remove("slide-in-y-button");
      }
       if (entry.target.classList.contains("xl")) {
        entry.target.classList.remove("slide-in-x-left");
      }
      if (entry.target.classList.contains("xr")) {
        entry.target.classList.remove("slide-in-x-right");
      }*/
    }
  });
});


myElements.forEach(myElement => observer.observe(myElement));
myElements2.forEach(myElement => observer.observe(myElement));
myElements3.forEach(myElement => observer.observe(myElement));


/*
const myElements3 = document.querySelectorAll(".yb");
myElements3.forEach(myElement => observer.observe(myElement));
const myElements4 = document.querySelectorAll(".xl");
myElements4.forEach(myElement => observer.observe(myElement));
const myElements5 = document.querySelectorAll(".xr");
myElements5.forEach(myElement => observer.observe(myElement));

*/







//scroll To Top beim clicken auf dem button
function scrollToTop() {
  scrollbtn.addEventListener('click', () => {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })

}



function app() {
  console.log("I'm from function app :), the start functio of JS");
  show_button();
  scrollToTop();
  set_darktheme();
  set_purbel_theme();
  show_einstellungen();
  animation();

}
app();