class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
        // year = null
        // cover_page = null
        // total_pages = null
        // current_page = null
        // id = null
    }
}

let bookList = [
  new Book('1984', 'George Orwell'),
  new Book('Pride and Prejudice', 'Jane Austen'),
  new Book('Dune', 'Frank Herbert')
];

/**
 * 
 * @param {string} query 
 * 
 * @returns Array of bookIDs
 */
async function getBookID(query) {
  let bookList = []
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`);
  
  const data = await response.json()
  console.log(data)
}

function addBook(id) {
  // Add book to mongo library
}

function getBooks() {
  // TODO: Return books
  return bookList
}

module.exports = {
  getBookID,
  getBooks
};