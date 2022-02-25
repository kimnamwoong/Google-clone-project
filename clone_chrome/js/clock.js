const clock = document.querySelector("h2#clock");

let arrDayStr = ['일','월','화','수','목','금','토'];

function getClock(){
    const date = new Date();
    const str1 = String(date.getFullYear()+'년 '+(date.getMonth()+1)+'월 '+date.getDate()+'일('+arrDayStr[date.getDay()]+')');
    const hours =   String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${str1} ${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);