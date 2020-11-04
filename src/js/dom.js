function createForm() {
  const form = document.createElement("form");

  const bookTitleField = document.createElement("input");
  bookTitleField.setAttribute("id", "title");
  bookTitleField.setAttribute("type", "text");
  bookTitleField.setAttribute("placeholder", "Book Title");

  const bookAuthorField = document.createElement("input");
  bookAuthorField.setAttribute("id", "author");
  bookAuthorField.setAttribute("type", "text");
  bookAuthorField.setAttribute("placeholder", "Book Author");

  const bookPagesField = document.createElement("input");
  bookPagesField.setAttribute("id", "pages");
  bookPagesField.setAttribute("type", "number");
  bookPagesField.setAttribute("placeholder", "Book Pages");

  const bookRead = document.createElement("input");
  bookRead.setAttribute("id", "read");
  bookRead.setAttribute("type", "checkbox");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-btn");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "New Book";

  form.appendChild(bookTitleField);
  form.appendChild(bookAuthorField);
  form.appendChild(bookPagesField);
  form.appendChild(bookRead);
  form.appendChild(submitButton);

  return form;
}

function createTable() {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  tr.innerHTML = "<th>Title</th><th>Author</th><th>Pages</th><th>Read</th>";
  table.appendChild(tr);
  return table;
}

function createTableRow(book) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td>`;
  tr.innerHTML += `<td><a href="#" class ='delete' onclick="removeBook(${book})"=>Delete Book</a></td>`;
  return tr;
}

export { createForm, createTable, createTableRow };
