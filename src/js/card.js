import data from "../../data/db.json";

// get images info in data
const imagesInfo = data.images;

// create card group
export const cardGroup = document.createElement("div");
cardGroup.classList.add("cardGroup");

// Func: create card
function createCard(imageInfo) {
  const cardDom = document.createElement("div");
  cardDom.classList.add("card");
  cardDom.style.backgroundImage = `url(${imageInfo.address})`;
  return cardDom;
}

// create card
imagesInfo.forEach((imageInfo) => {
  const cardDom = createCard(imageInfo);
  cardGroup.append(cardDom);
});
