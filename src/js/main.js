import "../css/style.scss";
import { cardGroup } from "./card";
import { buttonGroup } from "./button";

// const appDom = document.querySelector("#app");
const appDom = document.getElementById("app");
// console.log(appDom)

appDom.append(cardGroup);

cardGroup.append(buttonGroup);

// const leftDom = document.getElementsByClassName("left");
// console.log(leftDom[0]);
// const leftDom = document.querySelector(".left");
// console.log(leftDom);
const leftDom = buttonGroup.querySelector(".left");
const rightDOm = buttonGroup.querySelector(".right");

// cardList可以使用cardList.forEach()，但不能使用cardList.some()和cardList.every()
// 如果要使用:
// const cardList = Array(cardGroup.querySelectorAll(".card"))
// const cardList = cardGroup.querySelectorAll(".card");

leftDom.addEventListener("click", () => {
  const cardList = cardGroup.querySelectorAll(".card");
  cardGroup.prepend(cardList[cardList.length - 1]);
});

rightDOm.addEventListener("click", () => {
  const cardList = cardGroup.querySelectorAll(".card");
  // // cardGroup中除了carDom还有buttonGroup，append将第一个card放到最后一个，其实是放到buttonGroup后面，和前面的所有card都断开了
  // cardGroup.append(cardList[0]);
  // insertBefore(要插入的节点，插入哪个节点的前面)
  cardGroup.insertBefore(cardList[0], buttonGroup);
});
