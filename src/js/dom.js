function createForm() {
  const form = document.createElement('form');

  const bookTitleField = document.createElement('input');
  bookTitleField.setAttribute('id', 'title');
  bookTitleField.setAttribute('type', 'text');
  bookTitleField.setAttribute('placeholder', 'Book Title');

  const bookAuthorField = document.createElement('input');
  bookAuthorField.setAttribute('id', 'author');
  bookAuthorField.setAttribute('type', 'text');
  bookAuthorField.setAttribute('placeholder', 'Book Author');

  const bookPagesField = document.createElement('input');
  bookPagesField.setAttribute('id', 'pages');
  bookPagesField.setAttribute('type', 'number');
  bookPagesField.setAttribute('placeholder', 'Book Pages');

  const bookRead = document.createElement('input');
  bookRead.setAttribute('id', 'read');
  bookRead.setAttribute('type', 'checkbox');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerHTML = 'New Book';

  form.appendChild(bookTitleField);
  form.appendChild(bookAuthorField);
  form.appendChild(bookPagesField);
  form.appendChild(bookRead);
  form.appendChild(submitButton);

  return form;
}

function createTable() {}

function createTableRows() {}

export { createForm, createTable, createTableRows };
