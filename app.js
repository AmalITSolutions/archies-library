const books = [
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self Help",
    "category": "Self Help",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 10,
    "popularity": 95
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "category": "Fiction",
    "language": "English",
    "branch": "Both",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 10,
    "popularity": 70
  },
  {
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "genre": "Business",
    "category": "Business",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Like New",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 60
  },
  {
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "genre": "Business",
    "category": "Business",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 55
  },
  {
    "title": "The 5 AM Club",
    "author": "Robin Sharma",
    "genre": "Self Help",
    "category": "Self Help",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 65
  },
  {
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "genre": "Fantasy",
    "category": "Fantasy",
    "language": "English",
    "branch": "Karama",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 80
  },
  {
    "title": "Harry Potter and the Chamber of Secrets",
    "author": "J. K. Rowling",
    "genre": "Fantasy",
    "category": "Fantasy",
    "language": "English",
    "branch": "Satwa",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 78
  },
  {
    "title": "Asterix the Gaul",
    "author": "René Goscinny",
    "genre": "Comics",
    "category": "Comics",
    "language": "English",
    "branch": "Both",
    "age": "Kids",
    "condition": "Fair",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 6,
    "popularity": 50
  },
  {
    "title": "Diary of a Wimpy Kid",
    "author": "Jeff Kinney",
    "genre": "Children",
    "category": "Children",
    "language": "English",
    "branch": "Karama",
    "age": "Kids",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 45
  },
  {
    "title": "Geronimo Stilton: Lost Treasure",
    "author": "Geronimo Stilton",
    "genre": "Children",
    "category": "Children",
    "language": "English",
    "branch": "Satwa",
    "age": "Kids",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 40
  },
  {
    "title": "The Secret",
    "author": "Rhonda Byrne",
    "genre": "Self Help",
    "category": "Self Help",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 50
  },
  {
    "title": "Ikigai",
    "author": "Héctor García",
    "genre": "Self Help",
    "category": "Self Help",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Like New",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 10,
    "popularity": 55
  },
  {
    "title": "The Monk Who Sold His Ferrari",
    "author": "Robin Sharma",
    "genre": "Self Help",
    "category": "Self Help",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 52
  },
  {
    "title": "Good Vibes, Good Life",
    "author": "Vex King",
    "genre": "Self Help",
    "category": "Self Help",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Buy",
    "availability": "Available",
    "rentPrice": 15,
    "popularity": 40
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Classic",
    "category": "Classic",
    "language": "English",
    "branch": "Karama",
    "age": "Teens",
    "condition": "Fair",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 75
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Classic",
    "category": "Classic",
    "language": "English",
    "branch": "Both",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 68
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "genre": "Classic",
    "category": "Classic",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 72
  },
  {
    "title": "Animal Farm",
    "author": "George Orwell",
    "genre": "Classic",
    "category": "Classic",
    "language": "English",
    "branch": "Karama",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 70
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "category": "Classic",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 8,
    "popularity": 48
  },
  {
    "title": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "genre": "Mystery",
    "category": "Mystery",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 80
  },
  {
    "title": "And Then There Were None",
    "author": "Agatha Christie",
    "genre": "Mystery",
    "category": "Mystery",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 78
  },
  {
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "genre": "Thriller",
    "category": "Thriller",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 85
  },
  {
    "title": "Angels and Demons",
    "author": "Dan Brown",
    "genre": "Thriller",
    "category": "Thriller",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 72
  },
  {
    "title": "The Girl on the Train",
    "author": "Paula Hawkins",
    "genre": "Thriller",
    "category": "Thriller",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 8,
    "popularity": 45
  },
  {
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "genre": "Fiction",
    "category": "Fiction",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 10,
    "popularity": 70
  },
  {
    "title": "A Thousand Splendid Suns",
    "author": "Khaled Hosseini",
    "genre": "Fiction",
    "category": "Fiction",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 10,
    "popularity": 68
  },
  {
    "title": "Me Before You",
    "author": "Jojo Moyes",
    "genre": "Romance",
    "category": "Romance",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 55
  },
  {
    "title": "The Notebook",
    "author": "Nicholas Sparks",
    "genre": "Romance",
    "category": "Romance",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Fair",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 54
  },
  {
    "title": "It Ends With Us",
    "author": "Colleen Hoover",
    "genre": "Romance",
    "category": "Romance",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Like New",
    "type": "Buy",
    "availability": "Limited",
    "rentPrice": 18,
    "popularity": 60
  },
  {
    "title": "Twilight",
    "author": "Stephenie Meyer",
    "genre": "Fantasy",
    "category": "Fantasy",
    "language": "English",
    "branch": "Both",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 64
  },
  {
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "genre": "Young Adult",
    "category": "Young Adult",
    "language": "English",
    "branch": "Karama",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 66
  },
  {
    "title": "Divergent",
    "author": "Veronica Roth",
    "genre": "Young Adult",
    "category": "Young Adult",
    "language": "English",
    "branch": "Satwa",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 57
  },
  {
    "title": "Wings of Fire",
    "author": "A. P. J. Abdul Kalam",
    "genre": "Biography",
    "category": "Biography",
    "language": "English",
    "branch": "Both",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 62
  },
  {
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "genre": "Biography",
    "category": "Biography",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 12,
    "popularity": 48
  },
  {
    "title": "Becoming",
    "author": "Michelle Obama",
    "genre": "Biography",
    "category": "Biography",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Like New",
    "type": "Buy",
    "availability": "Available",
    "rentPrice": 20,
    "popularity": 42
  },
  {
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "genre": "History",
    "category": "History",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 70
  },
  {
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "genre": "Science",
    "category": "Science",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 10,
    "popularity": 55
  },
  {
    "title": "National Geographic Magazine",
    "author": "Various",
    "genre": "Magazine",
    "category": "Magazine",
    "language": "English",
    "branch": "Both",
    "age": "All Ages",
    "condition": "Good",
    "type": "Rent",
    "availability": "Available",
    "rentPrice": 4,
    "popularity": 30
  },
  {
    "title": "Reader's Digest",
    "author": "Various",
    "genre": "Magazine",
    "category": "Magazine",
    "language": "English",
    "branch": "Satwa",
    "age": "All Ages",
    "condition": "Fair",
    "type": "Rent",
    "availability": "Available",
    "rentPrice": 3,
    "popularity": 25
  },
  {
    "title": "Oxford School Atlas",
    "author": "Oxford",
    "genre": "School",
    "category": "School",
    "language": "English",
    "branch": "Karama",
    "age": "Kids",
    "condition": "Good",
    "type": "Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 45
  },
  {
    "title": "NCERT Mathematics Grade 8",
    "author": "NCERT",
    "genre": "School",
    "category": "School",
    "language": "English",
    "branch": "Karama",
    "age": "Kids",
    "condition": "Good",
    "type": "Buy",
    "availability": "Limited",
    "rentPrice": 10,
    "popularity": 38
  },
  {
    "title": "Cambridge English Grammar",
    "author": "Cambridge",
    "genre": "Academic",
    "category": "Academic",
    "language": "English",
    "branch": "Satwa",
    "age": "Teens",
    "condition": "Good",
    "type": "Buy",
    "availability": "Available",
    "rentPrice": 15,
    "popularity": 42
  },
  {
    "title": "Dubai Travel Guide",
    "author": "Lonely Planet",
    "genre": "Travel",
    "category": "Travel",
    "language": "English",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 30
  },
  {
    "title": "UAE Off-Road Explorer",
    "author": "Explorer",
    "genre": "Travel",
    "category": "Travel",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Buy",
    "availability": "Limited",
    "rentPrice": 18,
    "popularity": 28
  },
  {
    "title": "Indian Vegetarian Cooking",
    "author": "Madhur Jaffrey",
    "genre": "Cooking",
    "category": "Cooking",
    "language": "English",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 35
  },
  {
    "title": "Arabic Made Easy",
    "author": "Various",
    "genre": "Language Learning",
    "category": "Language Learning",
    "language": "Arabic",
    "branch": "Karama",
    "age": "All Ages",
    "condition": "Good",
    "type": "Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 32
  },
  {
    "title": "Hindi Kahaniyan",
    "author": "Various",
    "genre": "Fiction",
    "category": "Fiction",
    "language": "Hindi",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 36
  },
  {
    "title": "Malgudi Days",
    "author": "R. K. Narayan",
    "genre": "Fiction",
    "category": "Fiction",
    "language": "English",
    "branch": "Karama",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 58
  },
  {
    "title": "Premchand Stories",
    "author": "Munshi Premchand",
    "genre": "Classic",
    "category": "Classic",
    "language": "Hindi",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 44
  },
  {
    "title": "Malayalam Short Stories",
    "author": "Various",
    "genre": "Fiction",
    "category": "Fiction",
    "language": "Malayalam",
    "branch": "Both",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 40
  },
  {
    "title": "Tamil Moral Stories",
    "author": "Various",
    "genre": "Children",
    "category": "Children",
    "language": "Tamil",
    "branch": "Karama",
    "age": "Kids",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 34
  },
  {
    "title": "Urdu Poetry Collection",
    "author": "Various",
    "genre": "Poetry",
    "category": "Poetry",
    "language": "Urdu",
    "branch": "Satwa",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 6,
    "popularity": 38
  },
  {
    "title": "Marathi Balgeete",
    "author": "Various",
    "genre": "Children",
    "category": "Children",
    "language": "Marathi",
    "branch": "Karama",
    "age": "Kids",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 5,
    "popularity": 25
  },
  {
    "title": "French for Beginners",
    "author": "Various",
    "genre": "Language Learning",
    "category": "Language Learning",
    "language": "French",
    "branch": "Satwa",
    "age": "All Ages",
    "condition": "Good",
    "type": "Buy",
    "availability": "Available",
    "rentPrice": 12,
    "popularity": 31
  },
  {
    "title": "Quran Stories for Children",
    "author": "Various",
    "genre": "Religion",
    "category": "Religion",
    "language": "English",
    "branch": "Both",
    "age": "Kids",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 6,
    "popularity": 37
  },
  {
    "title": "The Bhagavad Gita",
    "author": "Eknath Easwaran",
    "genre": "Religion",
    "category": "Religion",
    "language": "English",
    "branch": "Karama",
    "age": "Adults",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 52
  },
  {
    "title": "Spider-Man Comic Collection",
    "author": "Marvel",
    "genre": "Comics",
    "category": "Comics",
    "language": "English",
    "branch": "Satwa",
    "age": "Kids",
    "condition": "Fair",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 6,
    "popularity": 46
  },
  {
    "title": "Tintin in Tibet",
    "author": "Hergé",
    "genre": "Comics",
    "category": "Comics",
    "language": "English",
    "branch": "Karama",
    "age": "Kids",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 7,
    "popularity": 49
  },
  {
    "title": "One Piece Vol. 1",
    "author": "Eiichiro Oda",
    "genre": "Manga",
    "category": "Manga",
    "language": "English",
    "branch": "Both",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Limited",
    "rentPrice": 8,
    "popularity": 41
  },
  {
    "title": "Naruto Vol. 1",
    "author": "Masashi Kishimoto",
    "genre": "Manga",
    "category": "Manga",
    "language": "English",
    "branch": "Satwa",
    "age": "Teens",
    "condition": "Good",
    "type": "Rent & Buy",
    "availability": "Available",
    "rentPrice": 8,
    "popularity": 39
  }
];

const grid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const languageFilter = document.getElementById('languageFilter');
const branchFilter = document.getElementById('branchFilter');
const ageFilter = document.getElementById('ageFilter');
const typeFilter = document.getElementById('typeFilter');
const conditionFilter = document.getElementById('conditionFilter');
const availabilityFilter = document.getElementById('availabilityFilter');
const sortFilter = document.getElementById('sortFilter');
const resultCount = document.getElementById('resultCount');

function uniqueValues(key) {
  return [...new Set(books.map(book => book[key]))].sort();
}

function fillSelect(select, values) {
  if (!select) return;
  values.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

fillSelect(categoryFilter, uniqueValues('genre'));
fillSelect(languageFilter, uniqueValues('language'));
fillSelect(branchFilter, uniqueValues('branch'));
fillSelect(ageFilter, uniqueValues('age'));
fillSelect(conditionFilter, uniqueValues('condition'));

function statusClass(status) {
  if (status === 'Limited') return 'limited';
  if (status === 'Out of Stock') return 'out';
  return '';
}

function whatsappLink(book) {
  const message = `Hello Archies Library, I am interested in ${book.title} by ${book.author}. Is it available for ${book.type}?`;
  return `https://wa.me/97143967924?text=${encodeURIComponent(message)}`;
}

function renderBooks(list) {
  if (!grid) return;
  if (resultCount) {
    resultCount.textContent = `Showing ${list.length} of ${books.length} books`;
  }

  grid.innerHTML = list.map(book => `
    <article class="book-card">
      <div class="book-cover">
        <div class="cover-title">${book.title}</div>
      </div>
      <div class="book-body">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p class="small">${book.genre} · ${book.language} · ${book.age}</p>
        <div class="book-meta">
          <span class="chip">${book.type.includes('Rent') ? 'Rent' : 'Buy Only'}</span>
          ${book.type.includes('Buy') ? '<span class="chip buy">Buy</span>' : ''}
          <span class="status ${statusClass(book.availability)}">${book.availability}</span>
        </div>
        <p class="small">Branch: <strong>${book.branch}</strong> · Condition: <strong>${book.condition}</strong></p>
        <div class="book-price">
          <strong>From AED ${book.rentPrice}</strong>
          <span class="small">Popular: ${book.popularity}%</span>
        </div>
        <div class="book-actions">
          <a class="btn light" href="#contact">Enquire</a>
          <a class="btn primary" href="${whatsappLink(book)}" target="_blank">WhatsApp</a>
        </div>
      </div>
    </article>
  `).join('') || '<p>No books found. Try another search or reset filters.</p>';
}

function matchesFilter(value, filterValue) {
  return filterValue === 'all' || value === filterValue || value === 'Both';
}

function filterBooks() {
  const q = (searchInput?.value || '').toLowerCase().trim();
  const genre = categoryFilter?.value || 'all';
  const language = languageFilter?.value || 'all';
  const branch = branchFilter?.value || 'all';
  const age = ageFilter?.value || 'all';
  const type = typeFilter?.value || 'all';
  const condition = conditionFilter?.value || 'all';
  const availability = availabilityFilter?.value || 'all';

  let result = books.filter(book => {
    const haystack = `${book.title} ${book.author} ${book.genre} ${book.language} ${book.branch} ${book.age} ${book.condition} ${book.type}`.toLowerCase();
    return (!q || haystack.includes(q))
      && matchesFilter(book.genre, genre)
      && matchesFilter(book.language, language)
      && matchesFilter(book.branch, branch)
      && matchesFilter(book.age, age)
      && (type === 'all' || book.type === type || (type === 'Rent' && book.type.includes('Rent')) || (type === 'Buy' && book.type.includes('Buy')))
      && matchesFilter(book.condition, condition)
      && matchesFilter(book.availability, availability);
  });

  const sortBy = sortFilter?.value || 'popular';
  if (sortBy === 'title') result.sort((a,b) => a.title.localeCompare(b.title));
  if (sortBy === 'priceLow') result.sort((a,b) => a.rentPrice - b.rentPrice);
  if (sortBy === 'priceHigh') result.sort((a,b) => b.rentPrice - a.rentPrice);
  if (sortBy === 'popular') result.sort((a,b) => b.popularity - a.popularity);

  renderBooks(result);
}

document.getElementById('searchBtn')?.addEventListener('click', filterBooks);
searchInput?.addEventListener('input', filterBooks);
[
  categoryFilter, languageFilter, branchFilter, ageFilter, typeFilter,
  conditionFilter, availabilityFilter, sortFilter
].forEach(select => select?.addEventListener('change', filterBooks));

document.querySelectorAll('.quick-tags button').forEach(btn => {
  btn.addEventListener('click', () => {
    searchInput.value = btn.dataset.key;
    filterBooks();
  });
});

document.getElementById('resetFilters')?.addEventListener('click', () => {
  searchInput.value = '';
  [categoryFilter, languageFilter, branchFilter, ageFilter, typeFilter, conditionFilter, availabilityFilter].forEach(select => {
    if (select) select.value = 'all';
  });
  if (sortFilter) sortFilter.value = 'popular';
  filterBooks();
});

document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.getElementById('navMenu')?.classList.toggle('open');
});

renderBooks(books.slice().sort((a,b) => b.popularity - a.popularity));
