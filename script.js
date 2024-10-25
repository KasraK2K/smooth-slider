const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");
const carouselDom = document.querySelector(".carousel");
const listItemDom = document.querySelector(".carousel .list");
const thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

function animation() {
  if (animationSide === "forward") {
    nextDom.click();
  } else {
    prevDom.click();
  }
}

const timeRunning = 2000;
const timeAutoNext = 7000;
let animationSide = "forward";
let runTimeOut;
let runAutoRun = setTimeout(animation, timeAutoNext);

function showSlider(type) {
  const itemSlider = document.querySelectorAll(".carousel .list .item");
  const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
    animationSide = "forward";
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
    animationSide = "backward";
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(animation, timeAutoNext);
}
