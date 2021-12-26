const placeTag = document.querySelector(".place");
const ggTag = document.querySelector(".gg");
const image2Tag = document.getElementsByClassName("image2")[0];
const fontTag = document.querySelectorAll(".font")
const idTag = document.getElementById("#id")
const mainTag = document.querySelectorAll(".main");
const dotTag = document.querySelectorAll(".dot");
const joinaudioTag = document.querySelector(".joinaudio")
const playbuttonTag = document.getElementsByClassName("fa-play")[0];
const pausebuttonTag = document.getElementsByClassName("fa-pause")[0];
const progressTag = document.getElementsByClassName("progress")[0];
const barTag = document.getElementsByClassName("bar")[0];
const nextbuttonTag = document.getElementsByClassName("nextbutton")[0];
const icon2Tag = document.getElementsByClassName("fa-play hide")[0];
const backbuttonTag = document.getElementsByClassName("backbutton")[0];


 const musics = [
    {name:"C:\Users/1/Music/The River-mc.ogg", id: "1", title:"The River", image:"https://i.ytimg.com/vi/W_3nq_hKipc/maxresdefault.jpg"},
    {name:"C:\Users/1/Music/I don't quite remember.mp3", id: "2", title:"I Don't Quiet Remember", image:"https://c4.wallpaperflare.com/wallpaper/358/713/232/anime-i-want-to-eat-your-pancreas-wallpaper-preview.jpg"},
    {name:"C:\Users/1/Music/We The Kings - Sad Song (Official Lyric Video) ft. Elena Coats.m4a", id: "3", title:"We The King", image:"https://i.ytimg.com/vi/BZsXcc_tC-o/maxresdefault.jpg"},
    {name:"C:\Users/1/Music/My heart will go on.mp3", id: "4", title:"My Heart Will Go On", image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2020/02/Paramount-prints-in-color-copy.jpg?fit=720%2C480&ssl=1"},
]

const musics2 = [
    {name:"C:\Users/1/Music/Alan Walker-Lost Control.m4a", id: "5", title:"Lost Control", image:"https://i.ytimg.com/vi/a_ydbTtRUwU/maxresdefault.jpg"},
    {name:"C:\Users/1/Music/Alan Walker-Faded.mp3", id: "6", title:"Faded", image:"https://www.srtfiles.com/posters/8576b01fd8645b8527986090891ddc31.jpg"},
    {name:"C:\Users/1/Music/Hello-mc..mp3", id: "7", title:"Hello", image:"https://tse2.mm.bing.net/th?id=OIP.xGyWbqujO3i80n4HlUjwngAAAA&pid=Api&P=0&w=159&h=159"},
    {name:"C:\Users/1/Music/I will be right here waiting for you - Richard Marx with lyrics.m4a", id: "8", title:"Right here waiting for you", image:"https://i.ytimg.com/vi/AtYxWYNq-FM/maxresdefault.jpg"}, 
]

const musics3 = [
    {name:"C:\Users/1/Music/She used to be mine.mp3", id: "9", title:"Used to be mine", image:"http://wallup.net/wp-content/uploads/2016/04/10/332100-original_characters-anime-anime_girls-snow-scarf-school_uniform.jpg"},
    {name:"C:\Users/1/Music/The Day I Left Away-mc.m4a", id: "10", title:"The day I left away", image:"https://i1.sndcdn.com/artworks-000079185465-t4rfag-t500x500.jpg"}, 
]

let pictures = [
    {name:"C:\Users//1/Music/The River-mc.mp3", id: "1", images: "https://i.ytimg.com/vi/W_3nq_hKipc/maxresdefault.jpg", backgroundimage:""},
    {name:"C:\Users/1/Music/I don't quite remember.mp3", id: "2", images: "https://c4.wallpaperflare.com/wallpaper/358/713/232/anime-i-want-to-eat-your-pancreas-wallpaper-preview.jpg", backgroundimage:""},
    {name:"C:\Users/1/Music/We The Kings - Sad Song (Official Lyric Video) ft. Elena Coats.m4a", id: "3", images: "https://i.ytimg.com/vi/BZsXcc_tC-o/maxresdefault.jpg"},
    {name:"C:\Users/1/Music/My heart will go on.mp3", id: "4", images: "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2020/02/Paramount-prints-in-color-copy.jpg?fit=720%2C480&ssl=1", backgroundimage:""},
    {name:"C:\Users/1/Music/Alan Walker-Lost Control.m4a", id: "5", images: "https://i.ytimg.com/vi/a_ydbTtRUwU/maxresdefault.jpg",  backgroundimage:""},
    {name:"C:\Users/1/Music/Alan Walker-Faded.mp3", id: "6", images: "https://www.srtfiles.com/posters/8576b01fd8645b8527986090891ddc31.jpg", backgroundimage:""},
    {name:"C:\Users/1/Music/Hello-mc..mp3", id: "7", images: "https://tse2.mm.bing.net/th?id=OIP.xGyWbqujO3i80n4HlUjwngAAAA&pid=Api&P=0&w=159&h=159",  backgroundimage:""},
    {name:"C:\Users/1/Music/I will be right here waiting for you - Richard Marx with lyrics.m4a", id: "8", images: "https://i.ytimg.com/vi/AtYxWYNq-FM/maxresdefault.jpg"},
    {name:"C:\Users/1/Music/She used to be mine.mp3", id: "9", images: "http://wallup.net/wp-content/uploads/2016/04/10/332100-original_characters-anime-anime_girls-snow-scarf-school_uniform.jpg",  backgroundimage:""},
    {name:"C:\Users/1/Music/The Day I Left Away-mc.m4a", id: "10", images: "https://i1.sndcdn.com/artworks-000079185465-t4rfag-t500x500.jpg",  backgroundimage:""}
]



const musicupdate = (change) => {
    change.forEach((element) => {
    const createmusic = `
        <div class="main" id="${element.id}" onclick="getId(this)">
        <image src="${element.image}" class="image"/>
        <div class="word">
        <div class="font">${element.title}</div>
        <i class="fas fa-play hide icon2"></i>
        </div>
        </div>
    `
    ggTag.innerHTML += createmusic;
})
}
musicupdate(musics)



const ggfun = () => {
mainTag.forEach((main) => {
    main.style.display = 'none'
})
}


dotTag.forEach((ele) => {
    ele.addEventListener("click", (event) => {
        const listenid = event.target.id;
        ggTag.classList.add("hi")
        if (listenid === "1") {
           ggTag.innerHTML = "";
           musicupdate(musics)
          } else if(listenid === "2") {
           ggTag.innerHTML = "";
           musicupdate(musics2)
          } else {
           ggTag.innerHTML = "";
           musicupdate(musics3)
          }
    })
})

let boolian = true;
const playandpause = () => {
    if (boolian == true) {
        playbuttonTag.style.display = "inline";
        pausebuttonTag.style.display = "none";
    } else if(boolian == false) {
        playbuttonTag.style.display = "none";
        pausebuttonTag.style.display = "inline-block";
    }
}

function getId(gg) {
    const id = gg.id 
    if (id === "1") {
        image2Tag.src = pictures[0].images
        joinaudioTag.src = musics[0].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 0;
    } else if (id === "2") {
        image2Tag.src = pictures[1].images
        joinaudioTag.src = musics[1].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 1;
    }else if (id === "3") {
        image2Tag.src = pictures[2].images
        joinaudioTag.src = musics[2].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 2;
    }else if (id === "4") {
        image2Tag.src = pictures[3].images
        joinaudioTag.src = musics[3].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 3;
    }else if (id === "5") {
        image2Tag.src = pictures[4].images
        joinaudioTag.src = musics2[0].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 4;
    }else if (id === "6") {
        image2Tag.src = pictures[5].images
        joinaudioTag.src = musics2[1].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 5;
    }else if (id === "7") {
        image2Tag.src = pictures[6].images
        joinaudioTag.src = musics2[2].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 6;
    }else if (id === "8") {
        image2Tag.src = pictures[7].images
        joinaudioTag.src = musics2[3].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 7;
    }else if (id === "9") {
        image2Tag.src = pictures[8].images
        joinaudioTag.src = musics3[0].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 8;
    }else if (id === "10") {
        image2Tag.src = pictures[9].images
        joinaudioTag.src = musics3[1].name
        joinaudioTag.play()
        boolian = false;
        playandpause()
        index = 9;
    }
    
  } 

const timeTag = document.getElementsByClassName("time")[0];
let Duration = "00:00"
let duration;
joinaudioTag.addEventListener("loadeddata", () => {
     duration = Math.floor(joinaudioTag.duration);
    const minute = Math.floor(duration / 60);
    const second = duration % 60;
    const minuteText = minute < 10 ? "0" + minute.toString() : minute;
    const secondText = second < 10 ? "0" + second.toString() : second;
    Duration = minuteText + ":" + secondText;
    timeTag.textContent = Duration;
})
let num = 0;
let durations = 0;
joinaudioTag.addEventListener("timeupdate", () => {
    durations = Math.floor(joinaudioTag.currentTime);
    const minute = Math.floor(durations / 60);
    const second = durations % 60;
    const minuteTexts = minute < 10 ? "0" + minute.toString() : minute;
    const secondTexts = second < 10 ? "0" + second.toString() : second;
    const Timelength = minuteTexts + ":" + secondTexts + "/" + Duration
    num = (400/duration) * durations;
    progressTag.style.width = num.toString() + "px";

})


playbuttonTag.addEventListener("click", () => {
    if (durations == 0) {
    playmusic = musics[0].name;
    joinaudioTag.src = playmusic;
    joinaudioTag.play();
    boolian = false;
    playandpause();
    } else {
        joinaudioTag.play();
        boolian = false;
        playandpause();
    }
})

pausebuttonTag.addEventListener("click", () => {
    joinaudioTag.pause();
    boolian = true;
    playandpause();
})

let index = 0;
nextbuttonTag.addEventListener("click", () => {
    if (index === 9) {
        index = -1;
        joinaudioTag.play();
        ggTag.innerHTML = "";
        musicupdate(musics)
    }
    if (index > 2) {
        ggTag.innerHTML = "";
           musicupdate(musics2)
    } 
    if (index > 6) {
        ggTag.innerHTML = "";
        musicupdate(musics3)
    }
    
    
    index += 1;
    const playmusic = pictures[index].name;
    joinaudioTag.src = playmusic;
    joinaudioTag.play();
    boolian = false;
    playandpause();
    const changeimage = pictures[index].images;
        image2Tag.src = changeimage;

})

backbuttonTag.addEventListener("click", () => {
    if (index === 0) {
        return;
    }
    if (index < 5 ) {
        ggTag.innerHTML = "";
        musicupdate(musics)
    }  else if (index < 9) {
        ggTag.innerHTML = "";
        musicupdate(musics2)
    }
    index -= 1;
    const playmusic = pictures[index].name;
    joinaudioTag.src = playmusic;
    joinaudioTag.play();
    boolian = false;
    playandpause();
    const changeimage = pictures[index].images;
        image2Tag.src = changeimage;
})

barTag.addEventListener("click", (action) => {
  const width = barTag.offsetWidth;
  const usertouch = action.offsetX;
  const soundtime = joinaudioTag.duration;

  joinaudioTag.currentTime = (usertouch / width) * soundtime;
  let measure = progressTag.style.width;
  if (measure == "400px") {
    joinaudioTag.play()
}
})

const revertbuttonTag = document.getElementsByClassName("revertbutton")[0];


revertbuttonTag.addEventListener("click", () => {
    const listenno = revertbuttonTag.classList.contains("no1");
    if (listenno === false) {
        revertbuttonTag.classList.add("no1")  //start loop
        revertbuttonTag.style.color = "#E63E6D"
        joinaudioTag.loop = true;
    } else {
        
        revertbuttonTag.style.color = "white"
        revertbuttonTag.classList.remove("no1")  // cancle loop
        joinaudioTag.loop = false;
    }
})

const circleTag = document.getElementsByClassName("circle")[0];

circleTag.addEventListener("click", () => {
    joinaudioTag.currentTime = 0;
    joinaudioTag.play()
})

const mutebottomTag = document.getElementsByClassName("mutebottom")[0];

mutebottomTag.addEventListener("click", () => {
    const listenmute = mutebottomTag.classList.contains("no2");
    if (listenmute === false) {
        mutebottomTag.classList.add("no2")  //start loop
        mutebottomTag.style.color = "#E63E6D"
        joinaudioTag.muted = true;
    } else {
        
        mutebottomTag.style.color = "white"
        mutebottomTag.classList.remove("no2")  // cancle loop
        joinaudioTag.muted = false;
    }
})



   
