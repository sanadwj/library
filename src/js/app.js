import { createForm, createTable } from './dom.js';


const contentDiv = document.getElementById('content');
const form = createForm();
contentDiv.appendChild(form);


const btn = document.getElementById('submit-btn');
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookTolibrary = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  if (title && author && pages && read) {

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    localStorage.setItem('data-store', JSON.stringify(myLibrary));
  }
};

btn.onClick = function (e) {
  e.preventDefault();
  addBookTolibrary();
  console.log(myLibrary);
};