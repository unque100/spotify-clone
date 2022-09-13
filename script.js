console.log("Welcome to Spotify ");
//intialising the variable

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));




let songs=[
    {
        songName:"Dil Tera Jado Tutda Ta Pata Lagega",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"
    },
    {
        songName:"Gypsy(PagalWorld)",filePath: "songs/2.mp3",coverPath:"covers/2.jpg"
    },
    {
        songName:"Har-Har-Shambhu-Shiv-Mahadeva",filePath: "songs/3.mp3",coverPath:"covers/3.jpg"
    },
    {
        songName:"In Aankhon Ki Masti Ke New Version",filePath: "songs/4.mp3",coverPath:"covers/4.jpg"
    },
    {
        songName:"Nachi Nachi - Street Dancer 3D 128 Kbps",filePath: "songs/5.mp3",coverPath:"covers/5.jpg"
    },
    {
        songName:"Oo Antava..Oo Oo Antava song",filePath: "songs/6.mp3",coverPath:"covers/6.jpg"
    },
    {
        songName:"Poori Gal Baat(PagalWorldl) (1)",filePath: "songs/7.mp3",coverPath:"covers/7.jpg"
    },
    {
        songName:"Radhe-Radhe-Bol-Mana(PagalWorld)",filePath: "songs/8.mp3",coverPath:"covers/8.jpg"
    },
    {
        songName:"Sharam Lihaaj(PagalWorld.com.se)",filePath: "songs/9.mp3",coverPath:"covers/9.jpg"
    },
    {
        songName:"Taki-Taki(mp3songs)",filePath: "songs/10.mp3",coverPath:"covers/10.jpg"
    }
    
    

]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    



})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    
    
        })
    

}


 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src= `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src= `songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

