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
        const searchURL = `https://openlibrary.org/search.json?q=${fixedSearch}&limit=3`;

        getResults()
        // Stagger getResults() to wait for input to complete
        async function getResults() {
            try {
                const response = await fetch(searchURL);

                if (!response.ok) {
                    throw new Error("No books matching your search.");
                }

                const data = await response.json();
                const docs = data.docs;
                searchResults.classList.toggle('visible');
                // Display each book
                docs.forEach(book => {
                    console.log(book)

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

//         // response returns a Promise(<pending>)
//         const response = fetch(searchURL);
        

//         // All info we need is in 'docs'
//         try {
//             let docs = data.docs;

//             for (book of docs) {
//                 // Display the book cards in HTML
//                 let bookCard = document.createElement("div");
//                 searchResults.appendChild(bookCard);

//                 // How to get the book cover? It needs another API call
//                 let bookCover = document.createElement("img");
//                 bookCard.appendChild(bookCover);
//                 bookCover.src = `https://covers.openlibrary.org/b/id${book.cover_i}-M.jpg`;

//                 let bookTitle = document.createTextNode(book.title);
//                 // Change styling with css
//                 bookTitle.class = "bookTitle"
//                 bookCard.appendChild(bookTitle);

//                 // Might want to show up to 3 authors, join each with a comma
//                 let bookAuthor = document.createTextNode(book.author_name[0]);
//                 bookAuthor.class = "bookAuthor";
//                 bookCard.appendChild(bookAuthor);

//                 let bookYear = document.createTextNode(book.first_publish_year);
//                 bookYear.class = "bookYear";
//                 bookCard.appendChild(bookYear);
//             }
//         }
//         catch(err) {
//             console.log("Invalid search: ", err);
//         }
//     })
// })

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