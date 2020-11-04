let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
  if (myLibrary.length > 0) {
    for (let i = 0; i < myLibrary.length; i += 1) {
      const tableRow = document.createElement('tr');
      const book = myLibrary[i];
      let readStatus = '';
      if (book.read) {
        readStatus = 'Read';
      } else {
        readStatus = 'Not Read';
      }
      tableRow.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td><button onclick="updateRead(${i})">${readStatus}</button></td>`;
      tableRow.innerHTML += `<td><a href="#" class='delete' onclick="removeBook(${i})"=>Delete Book</a></td>`;
      tableBody.appendChild(tableRow);
    }
  } else {
    const tableColSpan = document.createElement('tr');
    tableColSpan.colSpan = '4';
    tableColSpan.innerHTML = '<td><No Books Added </td>';
    tableBody.appendChild(tableColSpan);
  }
};

const updateRead = (idx) => {
  myLibrary = JSON.parse(localStorage.getItem('data-store'));
  const currentBook = myLibrary[idx];
  const currentStatus = currentBook.read;
  const newStatus = !currentStatus;
  currentBook.read = newStatus;
  localStorage.setItem('data-store', JSON.stringify(myLibrary));
  window.location.reload();
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
