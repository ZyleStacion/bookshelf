console.log("JS is connected.")

window.addEventListener("DOMContentLoaded", function() {
    // Get user search
    const search = document.getElementById('query');
    const searchResults = document.getElementById('searchResults');

    search?.addEventListener("keyup", function (query) { 
        console.log(query.target.value);
        
        // Fetch the search query, need to encode URI so that I won't get hijacked
        const fixedSearch = encodeURI(query.target.value);
        const searchURL = `https://openlibrary.org/search.json?q=${fixedSearch}&limit=3`;
        console.log("search url: ", searchURL);
        
        async function getResults() {
            const data = await fetch(searchURL);
            console.log(data);
        }

        // Promise response? Not the searchURL
        getResults();
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