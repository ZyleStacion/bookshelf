class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
        // this.year = year
        // this.cover_page = null
        // this.total_pages = null
        // this.current_page = null
    }
}

let bookList = [
  new Book('1984', 'George Orwell'),
  new Book('Pride and Prejudice', 'Jane Austen'),
  new Book('Dune', 'Frank Herbert')
];

function retrieveBookInfo(query, type) {
  // url = "https://openlibrary.org/search.json"

}

function getBooks() {
  // TODO: Return books
  return bookList
}

module.exports = {
  getBooks
};