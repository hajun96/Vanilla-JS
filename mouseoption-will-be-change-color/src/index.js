
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const wow = document.querySelector("h2");

const superEventHandler = {
  rightclicking: function () {
    wow.style.color = "#e74c3c";
    wow.innerText = "That was right Click!";
  },
  mounseentering: function () {
    wow.style.color = "#1abc9c";
    wow.innerText = "The mouse is here!";
  },
  mouseLeaveing: function () {
    wow.style.color = "#3498db";
    wow.innerText = "The mouse is gone!";
  },
  resizing: function () {
    wow.style.color = "#9b59b6";
    wow.innerText = "You Just resized!";
  }
};

window.addEventListener("contextmenu", superEventHandler.rightclicking);
wow.addEventListener("mouseenter", superEventHandler.mounseentering);
wow.addEventListener("mouseleave", superEventHandler.mouseLeaveing);
window.addEventListener("resize", superEventHandler.resizing);
