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
const catalogueSearchInput = document.getElementById('catalogueSearchInput');
const catalogueGenreFilter = document.getElementById('catalogueGenreFilter');
const catalogueLanguageFilter = document.getElementById('catalogueLanguageFilter');
const catalogueBranchFilter = document.getElementById('catalogueBranchFilter');
const catalogueAgeFilter = document.getElementById('catalogueAgeFilter');
const catalogueTypeFilter = document.getElementById('catalogueTypeFilter');
const resultCount = document.getElementById('resultCount');
const paginationControls = document.getElementById('paginationControls');

const BOOKS_PER_PAGE = 12;
let currentPage = 1;
let filteredBooks = [];

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
fillSelect(catalogueGenreFilter, uniqueValues('genre'));
fillSelect(catalogueLanguageFilter, uniqueValues('language'));
fillSelect(catalogueBranchFilter, uniqueValues('branch'));
fillSelect(catalogueAgeFilter, uniqueValues('age'));
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

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));
}

function coverClass(book) {
  return `genre-${String(book.genre).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function bookModeLabel(book) {
  if (book.type === 'Rent') return 'Rental Only';
  if (book.type === 'Buy') return 'Buy Only';
  return 'Rent or Buy';
}


function bookDescription(book) {
  const descriptions = {
    "Atomic Habits": "A practical guide to building good habits, breaking bad ones, and improving little by little every day.",
    "The Da Vinci Code": "A fast-paced mystery thriller involving symbols, history, secrets, and a race across Europe.",
    "Harry Potter and the Philosopher's Stone": "The beginning of Harry Potter's magical journey into Hogwarts, friendship, courage, and adventure.",
    "Murder on the Orient Express": "A classic detective mystery featuring Hercule Poirot and one of Agatha Christie's most memorable cases.",
    "The Alchemist": "A modern classic about dreams, destiny, and a shepherd boy's journey to discover his personal legend.",
    "Rich Dad Poor Dad": "A personal finance book that explains money, assets, liabilities, and financial thinking in simple language."
  };

  return descriptions[book.title] || `${book.title} is listed in the ${book.genre} section at Archies Library. This sample entry can later be replaced with the final book description, edition details and live stock information.`;
}

function coverSearchQuery(book) {
  return encodeURIComponent(`${book.title} ${book.author}`);
}

function renderCoverHTML(book, extraClass = '') {
  return `
    <div class="book-cover ${coverClass(book)} ${extraClass}" data-cover-title="${escapeHTML(book.title)}" data-cover-author="${escapeHTML(book.author)}">
      <div class="cover-placeholder">
        <span class="cover-genre">${escapeHTML(book.genre)}</span>
        <div class="cover-title">${escapeHTML(book.title)}</div>
        <span class="cover-footer">Archies Library</span>
      </div>
    </div>
  `;
}

const coverCache = new Map();

async function fetchOpenLibraryCover(book) {
  const key = `${book.title}|${book.author}`;
  if (coverCache.has(key)) return coverCache.get(key);

  try {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&limit=1`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Cover search failed');
    const data = await response.json();
    const doc = data.docs && data.docs[0];
    let coverUrl = '';
    if (doc?.cover_i) {
      coverUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
    } else if (doc?.isbn?.length) {
      coverUrl = `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-M.jpg`;
    }
    coverCache.set(key, coverUrl);
    return coverUrl;
  } catch (error) {
    coverCache.set(key, '');
    return '';
  }
}

function applyCoverImage(element, coverUrl) {
  if (!element || !coverUrl) return;
  element.classList.add('has-real-cover');
  element.innerHTML = `<img src="${coverUrl}" alt="Book cover" loading="lazy" onerror="this.closest('.book-cover').classList.remove('has-real-cover'); this.remove();">`;
}

function loadVisibleBookCovers() {
  document.querySelectorAll('.book-cover[data-cover-title]').forEach(async cover => {
    if (cover.dataset.loaded === 'true') return;
    cover.dataset.loaded = 'true';
    const book = books.find(item => item.title === cover.dataset.coverTitle);
    if (!book) return;
    const url = await fetchOpenLibraryCover(book);
    applyCoverImage(cover, url);
  });
}

function renderPagination(totalItems) {
  if (!paginationControls) return;

  const totalPages = Math.max(1, Math.ceil(totalItems / BOOKS_PER_PAGE));
  currentPage = Math.min(currentPage, totalPages);

  if (totalPages <= 1) {
    paginationControls.innerHTML = '';
    return;
  }

  let buttons = '';

  buttons += `<button ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">Previous</button>`;

  for (let page = 1; page <= totalPages; page++) {
    buttons += `<button class="${page === currentPage ? 'active' : ''}" data-page="${page}">${page}</button>`;
  }

  buttons += `<button ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">Next</button>`;
  buttons += `<button ${currentPage === totalPages ? 'disabled' : ''} data-page="${totalPages}">Last</button>`;

  paginationControls.innerHTML = buttons;

  paginationControls.querySelectorAll('button[data-page]').forEach(button => {
    button.addEventListener('click', () => {
      const page = Number(button.dataset.page);
      if (!page || page === currentPage) return;
      currentPage = page;
      renderBooks(filteredBooks);
      document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderBooks(list) {
  if (!grid) return;

  filteredBooks = list;
  const totalPages = Math.max(1, Math.ceil(list.length / BOOKS_PER_PAGE));
  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * BOOKS_PER_PAGE;
  const end = start + BOOKS_PER_PAGE;
  const pageBooks = list.slice(start, end);

  if (resultCount) {
    if (list.length === 0) {
      resultCount.textContent = `No books found`;
    } else {
      resultCount.textContent = `Showing ${start + 1}-${Math.min(end, list.length)} of ${list.length} books`;
    }
  }

  grid.innerHTML = pageBooks.map(book => `
    <article class="book-card enhanced-book-card">
      ${renderCoverHTML(book, 'clickable-book')}
      <div class="book-body">
        <h3 class="clickable-book-title" data-title="${escapeHTML(book.title)}">${escapeHTML(book.title)}</h3>
        <p>${escapeHTML(book.author)}</p>
        <p class="small">${escapeHTML(book.genre)} · ${escapeHTML(book.language)} · ${escapeHTML(book.age)}</p>
        <div class="book-meta">
          <span class="chip">${book.type.includes('Rent') ? 'Rent' : 'Buy Only'}</span>
          ${book.type.includes('Buy') ? '<span class="chip buy">Buy</span>' : ''}
          <span class="status ${statusClass(book.availability)}">${escapeHTML(book.availability)}</span>
        </div>
        <p class="small">Branch: <strong>${escapeHTML(book.branch)}</strong> · Condition: <strong>${escapeHTML(book.condition)}</strong></p>
        <div class="book-price">
          <strong>From AED ${book.rentPrice}</strong>
          <span class="small">Popular: ${book.popularity}%</span>
        </div>
        <div class="book-actions book-actions-three">
          <button class="btn light view-book-btn" type="button" data-title="${escapeHTML(book.title)}">View</button>
          <a class="btn light" href="contact.html">Ask</a>
          <a class="btn primary" href="${whatsappLink(book)}" target="_blank">WA</a>
        </div>
      </div>
    </article>
  `).join('') || '<p>No books found. Try another search or reset filters.</p>';

  renderPagination(list.length);
  loadVisibleBookCovers();
}

function matchesFilter(value, filterValue) {
  return filterValue === 'all' || value === filterValue || value === 'Both';
}

function activeValue(primarySelect, fallbackSelect) {
  const primaryValue = primarySelect?.value || 'all';
  const fallbackValue = fallbackSelect?.value || 'all';
  return primaryValue !== 'all' ? primaryValue : fallbackValue;
}

function filterBooks() {
  currentPage = 1;

  const q = ((catalogueSearchInput?.value || searchInput?.value || '')).toLowerCase().trim();
  const genre = activeValue(catalogueGenreFilter, categoryFilter);
  const language = activeValue(catalogueLanguageFilter, languageFilter);
  const branch = activeValue(catalogueBranchFilter, branchFilter);
  const age = activeValue(catalogueAgeFilter, ageFilter);
  const type = activeValue(catalogueTypeFilter, typeFilter);
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
catalogueSearchInput?.addEventListener('input', filterBooks);
[
  categoryFilter, languageFilter, branchFilter, ageFilter, typeFilter,
  catalogueGenreFilter, catalogueLanguageFilter, catalogueBranchFilter, catalogueAgeFilter, catalogueTypeFilter,
  conditionFilter, availabilityFilter, sortFilter
].forEach(select => select?.addEventListener('change', filterBooks));

document.querySelectorAll('.quick-tags button').forEach(btn => {
  btn.addEventListener('click', () => {
    searchInput.value = btn.dataset.key;
    if (catalogueSearchInput) catalogueSearchInput.value = btn.dataset.key;
    filterBooks();
  });
});

document.getElementById('resetFilters')?.addEventListener('click', () => {
  searchInput.value = '';
  if (catalogueSearchInput) catalogueSearchInput.value = '';
  [
    categoryFilter, languageFilter, branchFilter, ageFilter, typeFilter,
    catalogueGenreFilter, catalogueLanguageFilter, catalogueBranchFilter, catalogueAgeFilter, catalogueTypeFilter,
    conditionFilter, availabilityFilter
  ].forEach(select => {
    if (select) select.value = 'all';
  });
  if (sortFilter) sortFilter.value = 'popular';
  filterBooks();
});

document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.getElementById('navMenu')?.classList.toggle('open');
});

filterBooks();



// V16: Book details modal and Phase 2 preview buttons
function openBookDetails(title) {
  const book = books.find(item => item.title === title);
  const modal = document.getElementById('bookDetailsModal');
  const content = document.getElementById('bookDetailsContent');
  if (!book || !modal || !content) return;

  content.innerHTML = `
    ${renderCoverHTML(book, 'modal-book-cover')}
    <div class="modal-book-info">
      <span class="offer-label">${escapeHTML(bookModeLabel(book))}</span>
      <h2>${escapeHTML(book.title)}</h2>
      <p class="modal-summary">${escapeHTML(bookDescription(book))}</p>
      <div class="details-grid">
        <div><strong>Author</strong><span>${escapeHTML(book.author)}</span></div>
        <div><strong>Genre</strong><span>${escapeHTML(book.genre)}</span></div>
        <div><strong>Language</strong><span>${escapeHTML(book.language)}</span></div>
        <div><strong>Age Group</strong><span>${escapeHTML(book.age)}</span></div>
        <div><strong>Branch</strong><span>${escapeHTML(book.branch)}</span></div>
        <div><strong>Condition</strong><span>${escapeHTML(book.condition)}</span></div>
        <div><strong>Availability</strong><span>${escapeHTML(book.availability)}</span></div>
        <div><strong>Starting From</strong><span>AED ${book.rentPrice}</span></div>
      </div>
      <p class="small">This is sample catalogue data for the current demo site. Final availability, purchase price and rental rules will be confirmed by Archies Library.</p>
      <div class="modal-actions">
        <a class="btn primary" href="${whatsappLink(book)}" target="_blank">Ask on WhatsApp</a>
        <a class="btn light" href="contact.html">Send Enquiry</a>
        <button class="btn light phase2-btn" type="button">♡ Wishlist</button>
        <button class="btn light phase2-btn" type="button">🛒 Add to Cart</button>
      </div>
      <small class="phase2-note">Wishlist and cart are Phase 2 preview features.</small>
    </div>
  `;

  modal.classList.add('open');
  document.body.classList.add('modal-open');
  loadVisibleBookCovers();
}

function closeBookDetails() {
  const modal = document.getElementById('bookDetailsModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', event => {
  const viewButton = event.target.closest('.view-book-btn');
  if (viewButton) {
    openBookDetails(viewButton.dataset.title);
    return;
  }

  const clickableCover = event.target.closest('.clickable-book');
  if (clickableCover) {
    openBookDetails(clickableCover.dataset.coverTitle || clickableCover.dataset.title);
    return;
  }

  const clickableTitle = event.target.closest('.clickable-book-title');
  if (clickableTitle) {
    openBookDetails(clickableTitle.dataset.title);
    return;
  }

  if (event.target.matches('[data-close-modal]') || event.target.classList.contains('book-modal-backdrop')) {
    closeBookDetails();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeBookDetails();
});

// V15: Highlight active navigation item on section clicks/scroll
(function(){
  const navLinks = document.querySelectorAll('.main-header nav a');
  if (!navLinks.length) return;

  function clearSectionActive(){
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.includes('#home') || href.includes('#catalogue') || href.includes('#membership')) {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      if (href.includes('#home') || href.includes('#catalogue') || href.includes('#membership')) {
        clearSectionActive();
        link.classList.add('active');
      }
    });
  });
})();
