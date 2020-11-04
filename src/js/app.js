let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read) {
      this.read = "Read"
  } else {
    this.read = "Unread";
  }
  
}

const addBookToLibrary = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  localStorage.setItem('data-store', JSON.stringify(myLibrary));
  window.location.reload();
};

const tableBody = document.querySelector('.table-body');

const renderBook = () => {
  myLibrary = JSON.parse(localStorage.getItem('data-store'));
  for (let i = 0; i < myLibrary.length; i++) {
    const tableRow = document.createElement('tr');
    const book = myLibrary[i];
    tableRow.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td>`;
    tableRow.innerHTML += `<td><a href="#" class='delete' onclick="removeBook(${i})"=>Delete Book</a></td>`;
    tableBody.appendChild(tableRow);
  }
};

const removeBook = (idx) => {
  myLibrary = JSON.parse(localStorage.getItem('data-store'));
  myLibrary.splice(idx, 1);
  localStorage.setItem('data-store', JSON.stringify(myLibrary));
  window.location.reload();
};

window.onload = () => {
  renderBook();
};
console.log(myLibrary);
