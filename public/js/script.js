function toggleHamburgerMenu() {
    document.getElementById('hamburger').classList.toggle('hidden');
    document.getElementById('close').classList.toggle('hidden');
    document.getElementById('navbar').classList.toggle('visible');
}

function displaysearchResults() {
    // Create HTML elements
    const searchResults = document.createElement('div');
    const bookCard = document.createElement('div')
    searchResults.id = "searchResults"
    searchResults.class = "searchResults"
    bookCard.class = "bookCard"

    // Fill book cards - need to get cover image first
    bookCard.innerHTML = '';
}