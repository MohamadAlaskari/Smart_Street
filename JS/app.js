//variabels
 const scrollbtn = document.getElementById('scrollbtn');
 const img_home = document.getElementById('home-img');
 const left_side = document.getElementById('left-side');
 const right_side = document.getElementById('right-side');

//Ende variabels

/*
//click navlink
function active_nav_link_click(){
const menu_link = document.querySelectorAll('.menu > .nav-item > a')
menu_link.forEach((e)=>{
        e.addEventListener('click', ()=>{
                console.log("clicked");
        menu_link.forEach( (i)=> {
          i.classList.remove('active');
          i.style.cssText="color:#ccccccdb;";
      });
              e.classList.toggle('active');
              e.style.cssText="color:#fff;"
             
        })
})
}
*/

  



/*
*scroll to top
 */

function show_button(){     
  window.onscroll= function(){

     console.log("scrollY= " + this.scrollY);
     this.scrollY > 140 ? scrollbtn.classList.add("show") : scrollbtn.classList.remove("show");
    this.scrollY > 200 && this.scrollY < 700? img_home.style.cssText="transform: translateX(-110vw);transition: all 1s ease-out; opacity: 0.5;opacity: 1; ":img_home.style.cssText="transform: rotate(20deg) ;transition: all 1s ease-out; opacity: 0.5;opacity: 0";
    
    this.scrollY < 1500  ? left_side.style.cssText="  transition: all 1s ease-out; opacity: 0.5; ":left_side.style.cssText=" transition: all 1s ease-out;opacity: 0";
    this.scrollY < 1500  ? right_side.style.cssText="  transition: all 1s ease-out; opacity: 0.5; ":right_side.style.cssText=" transition: all 1s ease-out;opacity: 0";



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
     

}
app();