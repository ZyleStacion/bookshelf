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
 * @returns {bookList} a list of books
 */
async function getBookID(query) {
  let bookList = []
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`);
  
  const data = await response.json();

  // All info we need is in 'docs'
  let docs = data.docs;

  // console.log(docs[0].title)
  // Create book objects for search results
  for (let book in docs) {
    let result = new Book (docs[book].title, docs[book].author_name, docs[book].cover_i, docs[book].first_publish_year);
    bookList.push(result);
  }

  return bookList;
}
/**
 * 
 * Communicate to openLibrary API to get an image bookCover given the ID
 * 
 * @param {object} book
 * 
 * @returns {URL} bookCover 
 */
async function getBookCover(book) {
  let lookup_id = book.id
  
  return None;
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