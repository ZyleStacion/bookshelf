console.log("JS is connected.")

// Get user search
const search = document.getElementById('query');
search.addEventListener("keypress", )

function toggleHamburgerMenu() {
    document.getElementById('hamburger').classList.toggle('hidden');
    document.getElementById('close').classList.toggle('hidden');
    document.getElementById('navbar').classList.toggle('visible');
}

// // TODO: Display books in HTML
// function displaysearchResults(book) {
//     console.log("Started")
//     const resultsPane = document.getElementById("searchResults");
//     resultsPane.classList.toggle('visible')

//     // Create HTML card elements for each book
//     const bookCard = document.createElement('div');
//     bookCard.className = "bookCard";

//     const bookCover = document.createElement('img');
//     // Call getBookCover function?

//     const bookTitle = document.createElement('p');
//     bookTitle.className = "bookTitle";
//     bookTitle.textContent = book.Title;

//     const bookAuthor = document.createElement('p');
//     bookAuthor.className = "bookAuthor";
//     bookAuthor.textContent = book.Author;

//     const bookYear = document.createElement('p');
//     bookYear.className = "bookYear";
//     bookYear.textContent = book.Year;

//     bookCard.appendChild(bookCover);
//     bookCard.appendChild(bookTitle);
//     bookCard.appendChild(bookAuthor);
//     bookCard.appendChild(bookYear);

//     resultsPane.append(bookCard)

//     console.log("ended")
// }