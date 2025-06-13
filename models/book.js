class Book {
    constructor(title, author, id, year) {
        this.title = title
        this.author = author
        this.id = id
        this.year = year
    }


}

// let bookList = [
//   new Book('1984', 'George Orwell'),
//   new Book('Pride and Prejudice', 'Jane Austen'),
//   new Book('Dune', 'Frank Herbert')
// ];

/**
 * 
 * @param {string} query 
 * 
 * @returns Array of bookIDs
 */
async function getBookID(query) {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`);
  
  const data = await response.json();

  // All info we need is in 'docs'
  let docs = data.docs;

  // console.log(docs[0].title)
  // Create book objects for the cover IDs
  for (let book in docs) {
    let result = new Book (docs[book].title, docs[book].author_name, docs[book].cover_i, docs[book].first_publish_year);
    console.log(result)
    // console.log("book:", Book.title)
  }

  // return data.cover_i
}

function addBook(bookList) {
  // Add book to mongo library
}

function getBooks() {
  // TODO: Return books
  // return bookList
}

module.exports = {
  getBookID,
  getBooks
};