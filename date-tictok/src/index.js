const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const Xmas = new Date("2021-12-25:00:00:00 +0900"); // 크리스마스 날짜 설정
  const today = new Date(); // 오늘 날짜 설정
  const remain = Xmas - today; //남은 날짜 지정

  const day = Math.floor(remain / 1000 / 60 / 60 / 24);
  const hour = String(Math.floor(remain / 1000 / 60 / 60) % 24).padStart(
    2,
    "0"
  );
  const minute = String(Math.floor(remain / 1000 / 60) % 60).padStart(2, "0");
  const secounds = String(Math.floor(remain / 1000) % 60).padStart(2, "0");

  const remainDays = `${day}d ${hour}h ${minute}m ${secounds}s`;
  clockTitle.innerText = remainDays;
}

getTime();
setInterval(getTime, 1000);
