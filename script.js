// NAVBAR
const menue = document.querySelector(".menue")
const navbar = document.querySelector(".navbar")

menue.addEventListener("click", ()=>{
    navbar.classList.toggle("change")
})

// END-NAVBAR

// SECTION-2 VIDEO

const video  = document.querySelector(".video")
const btn  = document.querySelector(".buttons i")
const bar = document.querySelector(".video-bar")

btn.addEventListener("click", ()=>{
    if(video.paused){
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '0.7'
    }else{
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '0.3'
    }
})

video.addEventListener("timeupdate", ()=>{

    bar.style.width = `${video.currentTime/video.duration *100}%`

    if(video.ended){
        btn.className = 'far fa-play-circle'
        video.style.opacity = '0.3'
        bar.style.width = `0%`
    }
})


// END-SECTION-2

// START-SECTION-3

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });
// END-SECTION-3
