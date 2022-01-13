 const clock = document.querySelector('h2#clock') //#clock


 function getClock() {
     const date = new Date()
     const hours = String(date.getHours()).padStart(2,'0')
     const minutes = String(date.getMinutes()).padStart(2,'0')
     const secounds = String(date.getSeconds()).padStart(2,'0')
     clock.innerText = `${hours}:${minutes}:${secounds}`
 }

getClock()
setInterval(getClock, 1000)
 
 
// setInterval(sayHello, 5000)   //setinterval() 인자를 두개 받음.(함수, ms )

// setTimeout(sayHello, 5000) //setTimeout() 

// '1'.padStart(2,'0') 길이가 1인 문자열이 있다고 했을때 padstart함수는 (길이를 2로 만들고 , 나머지를 '0'으로 채운다)


// function getTime() {
//     const Xmas = new Date('2021-12-24:00:00:00 +0900') // 크리스마스 날짜 설정
//     const today = new Date() // 오늘 날짜 설정 

//     const remain = Xmas - today //남은 날짜 지정

//     const day = Math.floor(remain/1000/60/60/24) 
//     const hour = String(Math.floor(remain/1000/60/60) % 24).padStart(2,'0')
//     const minute = String(Math.floor(remain/1000/60) % 60).padStart(2,'0')
//     const secounds = String(Math.floor(remain/1000) % 60).padStart(2,'0')
//     // const secounds = Math.floor(remain/1000) % 60

//     const remainDays = `${day}d ${hour}h ${minute}m ${secounds}s`
//     clock.innerText = remainDays
// }

//     getTime()
//     setInterval(getTime, 1000)
