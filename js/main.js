console.log("Hello World");

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img");
const imgs3 = document.getElementById("img3");
const img3 = document.querySelectorAll("#img3 img");

let idx = 0;
let idx2 = 0;
let idx3 = 0;

function handleNextPicture() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 636}px)`;
}

function handlePreviousPicture() {
  idx--;

  if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 636}px)`;
}

function handleNextPicture2() {
  idx2++;

  if (idx2 > img2.length - 1) {
    idx2 = 0;
  }

  imgs2.style.transform = `translateX(${-idx2 * 260}px)`;
}

function handlePreviousPicture2() {
  idx2--;

  if (idx2 < 0) {
    idx2 = img2.length - 1;
  }

  imgs2.style.transform = `translateX(${-idx2 * 260}px)`;
}

function handleNextPicture3() {
  idx3++;

  if (idx3 > img3.length - 1) {
    idx3 = 0;
  }

  imgs3.style.transform = `translateX(${-idx3 * 260}px)`;
}

function handlePreviousPicture3() {
  idx3--;

  if (idx3 < 0) {
    idx3 = img3.length - 1;
  }

  imgs3.style.transform = `translateX(${-idx3 * 260}px)`;
}
