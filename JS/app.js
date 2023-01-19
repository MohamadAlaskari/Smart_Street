//variabels
 const scrollbtn = document.getElementById('scrollbtn');
 const square = document.getElementById('square-1');
 const left_side = document.getElementById('left-side');
 const right_side = document.getElementById('right-side');
 //einstellungen
 const gear = document.getElementById('gear');
 const einstellungen = document.getElementById('einstellungen');

 
 const  color_container = document.getElementById('colorcontainer');
 const  playercontainer = document.getElementById('playercontainer');




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
function show_einstellungen(){
  gear.addEventListener('click',()=>{
    console.log("gear clicked");
    color_container.classList.toggle('active-color-container');
  })
}
//theme ändern
function set_darktheme(){
  darktheme.addEventListener('click',()=>{
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
function set_purbel_theme(){
  purbeltheme.addEventListener('click',()=>{
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




/*



  



/*
*scroll to top
 */

function show_button(){     
  window.onscroll= function(){

  //   console.log("scrollY= " + this.scrollY);
  //show scrollbtn an y > 140
     this.scrollY > 140 ? scrollbtn.classList.add("show") : scrollbtn.classList.remove("show");
       //show scrollbtn an y > 140
    this.scrollY > 205 && this.scrollY < 690? square.style.cssText="transition: all 1s ease-out; opacity: 0.7; ":square.style.cssText="transition: all 1s ease-out;opacity: 0";    
    this.scrollY < 1500  ? left_side.style.cssText="transition: all 1s ease-out; opacity: 0.5; ":left_side.style.cssText=" transition: all 1s ease-out;opacity: 0";
    this.scrollY < 1500  ? right_side.style.cssText="transition: all 1s ease-out; opacity: 0.5; ":right_side.style.cssText=" transition: all 1s ease-out;opacity: 0";
  }
}

//scroll To Top beim clicken auf dem button
function scrollToTop(){
  scrollbtn.addEventListener('click',()=>{
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