// Heading Change
let myHeading = document.querySelector("h1");
let ButtonState = true;
document.querySelector("button").onmouseup = function () {
  if (ButtonState === true) {
    myHeading.textContent = "IdeaOcean A";
    ButtonState = false;
  }
  else {
    myHeading.textContent = "IdeaOcean B";
    ButtonState = true;
  }
};
// Image Change
let myImage = document.querySelector("img");
let myList = document.querySelector('#imglist');
var Idx = 1;
myList.textContent = Idx;
myImage.onclick = function() {
  Idx = Idx + 1;
  if (Idx === 5) {
    Idx = 1;
  }
  myList.textContent = "Image_" + Idx;
  switch (Idx) {
    case 1: {
      myImage.setAttribute("src","images/strap1.png");
      break; // 이거 꼭 넣어줘야 다른 언어처럼 작동한다.
    }
    case 2: {
      myImage.setAttribute("src","images/strap2.png");
      break;
    }
    case 3: {
      myImage.setAttribute("src","images/strap3.png");
      break;
    }
    case 4: {
      myImage.setAttribute("src","images/strap4.png");
      break;
    }
  }

};
// Prompt Setting
function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
};
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}