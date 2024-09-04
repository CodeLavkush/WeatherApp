let bgArr = ["./img/rain_1.gif","./img/rain_2.gif","./img/rain_3.gif","./img/rain_4.gif","./img/rain_5.gif","./img/rain_6.gif"]

let currentIndex = 0;

setInterval(()=>{
    changeBg();
    currentIndex++;
}, 4000)

function changeBg(){
    let searchBg = document.querySelector(".search-section");

    if(currentIndex < bgArr.length){
        searchBg.style.backgroundImage = `url(${bgArr[currentIndex]})`;
    }
    else{
        currentIndex = 0;
        searchBg.style.backgroundImage = `url(${bgArr[currentIndex]})`;
    }
}