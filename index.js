function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((error) => console.log("Error fetching data:", error));
}

function renderBooks(data) {
  const bookList = document.getElementById("book-list");
  data.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

fetchBooks(); // Call the fetchBooks function when the page is loaded





