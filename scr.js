document.addEventListener('click',function(){
    const monAudio=document.querySelector('audio');
    monAudio.play();
    console.log("Musique lancée !");
}, {once: true });