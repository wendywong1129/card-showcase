import data from "../../data/db.json";

// get buttons info in data
const buttonsInfo = data.buttons;

// create button group
export const buttonGroup = document.createElement("div");
buttonGroup.classList.add("buttonGroup");

// Func: create button
function createButton(buttonInfo) {
  const buttonDom = document.createElement("div");
  buttonDom.classList.add("button");
  buttonInfo.className.forEach((className) => {
    buttonDom.classList.add(className);
  });
  return buttonDom;
}

// create button
buttonsInfo.forEach((buttonInfo) => {
  const buttonDom = createButton(buttonInfo);
  buttonGroup.append(buttonDom);
});
