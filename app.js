"use strict";

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
const row = document.querySelectorAll('.row');

const dragover = (e) => {
  e.preventDefault();
};

const dragenter = (e) => {
  const target = e.target;
  target.classList.add("hovered");
};

const dragleave = (e) => {
  const target = e.target;
  target.classList.remove("hovered");
};

const dragdrop = (e) => {
  const target = e.target;
  target.classList.remove("hovered");
  target.append(item);
};

const dragstart = (e) => {
  const target = e.target;
  target.classList.add("hold");
  setTimeout(() => {
    target.classList.add("hide");
  }, 0);
};

const dragend = (e) => {
  const target = e.target;
  target.classList.remove("hold", "hide");
};

row[1].addEventListener('dragover', (e) => {
    const target = e.target;
    if(target.closest('.placeholder')){
        dragover(e);
    }
})
row[1].addEventListener('dragenter', (e) => {
    const target = e.target;
    if(target.closest('.placeholder')){
        dragenter(e);
    }
})
row[1].addEventListener('dragleave', (e) => {
    const target = e.target;
    if(target.closest('.placeholder')){
        dragleave(e);
    }
})
row[1].addEventListener('drop', (e) => {
    const target = e.target;
    if(target.closest('.placeholder')){
        dragdrop(e);
    }
})

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
