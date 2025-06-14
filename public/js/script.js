console.log("JS is connected.")

// Get user search
const search = document.getElementById('query');
search.addEventListener("keyup", async function(search) {
    const response = fetch(`https://openlibrary.org/search.json?q=${query}&limit=3`);
    
    const data = await response.json();
    // All info we need is in 'docs'
    let docs = data.docs;
    
    
    // Display the book cards in HTML
    let bookCard = document.createElement("div");
    search.appendChild(bookCard);
    
    let bookCover = document.createElement("img");
    bookCard.appendChild(bookCover);
    bookCover.src = 

    let bookTitle = document.createTextNode("h3"); // Change later
    bookCard.appendChild(bookTitle);
    
})

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