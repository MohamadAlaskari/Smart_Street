//variabels

//variabels für animation
const home_headline = document.getElementById('home-headline');
const home_subtext = document.getElementById('home-subtext');
//about
const about_headline = document.getElementById('about-headline');
const about_subtext = document.getElementById('about-subtext');
const about_text = document.getElementById('about-text');
//vorteile
const vorteile_headline = document.getElementById('vorteile-headline');
const vorteile_subtext = document.getElementById('vorteile-subtext');
const vorteilebox1 = document.getElementById('vorteilebox1');
const vorteilebox2 = document.getElementById('vorteilebox2');
const vorteilebox3 = document.getElementById('vorteilebox3');
const vorteilebox4 = document.getElementById('vorteilebox4');
const vorteilebox5 = document.getElementById('vorteilebox5');
const vorteilebox6 = document.getElementById('vorteilebox6');
//team
const team_headline = document.getElementById('team-headline');
const team_subtext = document.getElementById('team-subtext');



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
    //animation
    this.scrollY < 100 ? home_headline.classList.add("slide-in-x") : home_headline.classList.remove("slide-in-x");
    this.scrollY < 100 ? home_subtext.classList.add("slide-in-y") : home_subtext.classList.remove("slide-in-y");
    //about
    this.scrollY >= 160 ? about_headline.classList.add("slide-in-x") : about_headline.classList.remove("slide-in-x");
    this.scrollY >= 161 ? about_subtext.classList.add("slide-in-y") : about_subtext.classList.remove("slide-in-y");
    this.scrollY >= 163 ? about_text.classList.add("slide-in-y-button") : about_text.classList.remove("slide-in-y-button");
    //vorteile

    this.scrollY >= 800 ? vorteile_headline.classList.add("slide-in-x") : vorteile_headline.classList.remove("slide-in-x");
    this.scrollY >= 800 ? vorteile_subtext.classList.add("slide-in-y") : vorteile_subtext.classList.remove("slide-in-y");
    this.scrollY >= 810 ? vorteilebox1.classList.add("slide-in-x-left") : vorteilebox1.classList.remove("slide-in-x-left");
    this.scrollY >= 810 ? vorteilebox2.classList.add("slide-in-x-right") : vorteilebox2.classList.remove("slide-in-x-right");
    this.scrollY >= 950 ? vorteilebox3.classList.add("slide-in-x-left") : vorteilebox3.classList.remove("slide-in-x-left");
    this.scrollY >= 950 ? vorteilebox4.classList.add("slide-in-x-right") : vorteilebox4.classList.remove("slide-in-x-right");
    this.scrollY >= 1320 ? vorteilebox5.classList.add("slide-in-y-button") : vorteilebox5.classList.remove("slide-in-y-button");
    this.scrollY >= 1320 ? vorteilebox6.classList.add("slide-in-x-right") : vorteilebox6.classList.remove("slide-in-x-right");
    //team

    this.scrollY >= 2000 ? team_headline.classList.add("slide-in-x") : team_headline.classList.remove("slide-in-x");
    this.scrollY >= 2000 ? team_subtext.classList.add("slide-in-y") : team_subtext.classList.remove("slide-in-y");
    this.scrollY >= 2070 ? teambox1.classList.add("slide-in-x-left") : teambox1.classList.remove("slide-in-x-left");
    this.scrollY >= 2073 ? teambox2.classList.add("slide-in-y-button") : teambox2.classList.remove("slide-in-y-button");
    this.scrollY >= 2075 ? teambox3.classList.add("slide-in-x-right") : teambox3.classList.remove("slide-in-x-right");


  }
}

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


}
app();