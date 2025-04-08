document.addEventListener('DOMContentLoaded', function() {
    const books = [
        {
            title: "Мастер и Маргарита",
            author: "Михаил Булгаков",
            genre: "Художественная",
            year: 1967,
            available: true
        },
        {
            title: "Преступление и наказание",
            author: "Фёдор Достоевский",
            genre: "Художественная",
            year: 1866,
            available: true
        },
        {
            title: "1984",
            author: "Джордж Оруэлл",
            genre: "Фантастика",
            year: 1949,
            available: false
        },
        {
            title: "Убийство в Восточном экспрессе",
            author: "Агата Кристи",
            genre: "Детектив",
            year: 1934,
            available: true
        },
        {
            title: "Краткая история времени",
            author: "Стивен Хокинг",
            genre: "Научная",
            year: 1988,
            available: true
        }
    ];

    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const genreFilter = document.getElementById('genreFilter');

    function displayBooks(booksToDisplay) {
        bookList.innerHTML = '';
        
        if (booksToDisplay.length === 0) {
            bookList.innerHTML = '<p>Книги не найдены</p>';
            return;
        }
        
        booksToDisplay.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            
            bookCard.innerHTML = `
                <div class="book-cover">${book.title.charAt(0)}</div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>Автор: ${book.author}</p>
                    <p>Год: ${book.year}</p>
                    <p>Доступность: ${book.available ? 'Доступна' : 'На руках'}</p>
                    <span class="genre">${book.genre}</span>
                </div>
            `;
            
            bookList.appendChild(bookCard);
        });
    }

    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value;
        
        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                                book.author.toLowerCase().includes(searchTerm);
            const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
            
            return matchesSearch && matchesGenre;
        });
        
        displayBooks(filteredBooks);
    }

    displayBooks(books);

    searchButton.addEventListener('click', filterBooks);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterBooks();
        }
    });
    genreFilter.addEventListener('change', filterBooks);
});