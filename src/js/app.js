import { createForm, createTable, createTableRow } from "./dom.js";

const contentDiv = document.getElementById("content");
const form = createForm();
const libraryTable = createTable();

contentDiv.appendChild(form);

const btn = document.getElementById("submit-btn");
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookTolibrary = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  if (title && author && pages) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    localStorage.setItem("data-store", JSON.stringify(myLibrary));
    window.location.reload();
  }
};

const removeBook = (idx) => {
  myLibrary = JSON.parse(localStorage.getItem("data-store"));
  myLibrary.splice(idx, 1);
  localStorage.setItem("data-store", JSON.stringify(myLibrary));
  window.location.reload();
};

const renderBooks = () => {
  if (localStorage.getItem("data-store")) {
    myLibrary = JSON.parse(localStorage.getItem("data-store"));
    for (let i = 0; i < myLibrary.length; i = i + 1) {
      const tr = createTableRow(myLibrary[i]);
      libraryTable.appendChild(tr);
    }
  }
};

btn.onclick = function (e) {
  e.preventDefault();
  addBookTolibrary();
  console.log(myLibrary);
};
contentDiv.appendChild(libraryTable);
window.onload = () => {
  renderBooks();
};
