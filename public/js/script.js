console.log("JS is connected.")

function createBookCard(book) {
    // Display the book cards in HTML
    let bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    searchResults.appendChild(bookCard);

    // Cover
    let bookCover = document.createElement("img");
    bookCard.appendChild(bookCover);
    bookCover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    bookCover.alt = `${book.title} cover`;

    // Title
    let bookTitle = document.createElement("p");
    bookTitle.innerHTML = book.title;
    bookTitle.class = "bookTitle";
    bookCard.appendChild(bookTitle);

    // Might want to show up to 3 authors, join each with a comma
    let bookAuthor = document.createElement("p");
    // Undefined?
    bookAuthor.innerHTML = book.author;
    bookAuthor.class = "bookAuthor";
    bookCard.appendChild(bookAuthor);

    // Publish year
    let bookYear = document.createElement("p");
    bookYear.innerHTML = book.first_publish_year;
    bookYear.class = "bookYear";
    bookCard.appendChild(bookYear);

    return bookCard;
};

window.addEventListener("DOMContentLoaded", function() {
    // Get user search
    const search = document.getElementById('query');
    const searchResults = document.getElementById('searchResults');

    search?.addEventListener("keyup", function (query) { 
        console.log(query.target.value);
        
        // Fetch the search query, need to encode URI
        const fixedSearch = encodeURI(query.target.value);

        // BUG: not returning correct search results.
            // TODO: Specify search query to EXCLUSIVELY book titles
        const searchURL = `https://openlibrary.org/search.json?q=${fixedSearch}&limit=5`;

        // Clear searchResult child nodes (bookCards)
        if (searchResults.hasChildNodes()) {
            while (searchResults.firstChild) {
                searchResults.removeChild(searchResults.firstChild);
            }
        }
        
        getResults()
        
        // Stagger getResults() to wait for input to complete
        async function getResults() {
            try {
                const response = await fetch(searchURL, { 
                    headers: {
                        'User-Agent' : 'BookshelfApp (zyle.destacion@gmail.com)'
                    }
                });
                if (!response.ok) {
                    throw new Error("No books matching your search.");
                }

                const data = await response.json();
                const docs = data.docs;

                // Display each book
                docs.forEach(book => {
                    console.log(book);

                    // Templating function
                    const bookCard = createBookCard(book);
                    searchResults.appendChild(bookCard);
                });
            }
            catch(error) {
                console.error(error);
            }
        }  
    })
})

function toggleHamburgerMenu() {
    document.getElementById('hamburger').classList.toggle('hidden');
    document.getElementById('close').classList.toggle('hidden');
    document.getElementById('navbar').classList.toggle('visible');
}