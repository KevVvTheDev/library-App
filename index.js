const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "read" : "not read";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

//----------------------
const buttonClicked = document.querySelector(".newBook");
buttonClicked.addEventListener("click", openForm);
function openForm() {
  document.getElementById('formContainer').style.display = 'block';
}

// Function to close the form by changing the display
function closeForm() {
  document.getElementById('formContainer').style.display = 'none';
}

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function(){

  // Get values from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('readStatus').checked;

  if (title === "" || author === "" || pages === "") { //if any of the inputs are empty
    return;
  }
  // Create new Book object
  const newBook = new Book(title, author, pages, read);

  // Add book to library  
  myLibrary.push(newBook);
  // Create a new div to display the book
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  bookDiv.textContent = newBook.info();

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', function() {
      bookDiv.remove(); // Remove the book div when button is clicked
  });
  const readBtn = document.createElement('button');
  readBtn.classList.add('read-btn');
  readBtn.textContent = newBook.read;
  readBtn.addEventListener('click', function() {
      newBook.read = newBook.read === "read" ? "not read" : "read";
      readBtn.textContent = newBook.read;
      bookDiv.textContent = newBook.info();
      bookDiv.appendChild(removeBtn);
      bookDiv.appendChild(readBtn);
  });

  // Append remove button to the book div
    bookDiv.appendChild(removeBtn);
    bookDiv.appendChild(readBtn);

  document.getElementById('bookDisplay').appendChild(bookDiv);
  document.getElementById('bookForm').reset();
  closeForm();  
});