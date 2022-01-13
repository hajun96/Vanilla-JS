const h1 = document.createElement("h1"); //h1 생성
const body = document.querySelector("body"); //쿼리셀렉터로 바디 불러옴
h1.innerText = "Hello!"; //생성된 h1 의 텍스트는 Hello!
h1.style.color = "white"; // h1의 색상은 화이트
body.style.backgroundColor = "white"; //body의 배경 색상은 화이트
body.appendChild(h1); // body노드 안에 h1 객체 추가

function changingColor() {
  if (window.innerWidth < 500) {
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth < 1000) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "gold";
  }
}

window.addEventListener("resize", changingColor);
