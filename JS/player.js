
var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");
 //square
 const square_plakat = document.getElementById('square-1-plakat');
 const square_2_plakat = document.getElementById('square-2-plakat');


var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}




const downloadPlakatBtn = document.querySelector('.download-plakat')
downloadPlakatBtn.addEventListener('click', () => {
    downloadPlakatBtn.classList.add('active')
    setTimeout(() => {
        downloadPlakatBtn.classList.remove('active')
    }, 13000)
})

const downloadAudioBtn = document.querySelector('.download-audio')
downloadAudioBtn.addEventListener('click', () => {
    downloadAudioBtn.classList.add('active')
    setTimeout(() => {
        downloadAudioBtn.classList.remove('active')
    }, 13000)
})



const imgPlakat = document.querySelector('.img-plakat');

imgPlakat.addEventListener('click', function() {
  
  this.classList.toggle('transition');
});


function bg_square(){     
  window.onscroll= function(){
    //omar
    this.scrollY > 200 && this.scrollY < 700? square_plakat.style.cssText="transition: all 1s ease-out; opacity: 0.5;opacity: 1; ":square_plakat.style.cssText="transform: rotate(20deg) ;transition: all 1s ease-out; opacity: 0.5;opacity: 0";    
    this.scrollY > 200 && this.scrollY < 700? square_2_plakat.style.cssText="transition: all 1s ease-out; opacity: 0.5;opacity: 1; ":square_2_plakat.style.cssText="transform: rotate(20deg) ;transition: all 1s ease-out; opacity: 0.5;opacity: 0";
    //ende
  }
}
bg_square();

