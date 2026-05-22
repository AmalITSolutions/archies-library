const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const typeFilter = document.getElementById('typeFilter');
const year = document.getElementById('year');
let books = [];

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

async function loadBooks() {
  try {
    const response = await fetch('books.json');
    books = await response.json();
    populateGenres();
    renderBooks(books);
  } catch (error) {
    bookGrid.innerHTML = '<p>Unable to load books. Please check books.json file.</p>';
  }
}

function populateGenres() {
  const genres = [...new Set(books.map(book => book.genre))].sort();
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

function renderBooks(list) {
  if (!list.length) {
    bookGrid.innerHTML = '<p>No books found. Try another search.</p>';
    return;
  }
  bookGrid.innerHTML = list.map(book => `
    <article class="book-card">
      <div class="book-cover">${book.title}</div>
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><span class="tag">${book.genre}</span><span class="tag">${book.type}</span></p>
      <p><strong>Branch:</strong> ${book.branch}</p>
      <p><strong>Status:</strong> ${book.status}</p>
      <a class="btn secondary" href="mailto:info@example.com?subject=Book enquiry: ${encodeURIComponent(book.title)}&body=Hello Archies Library,%0D%0A%0D%0AI am interested in ${encodeURIComponent(book.title)}.%0D%0APreferred branch: ${encodeURIComponent(book.branch)}%0D%0A%0D%0AThank you.">Enquire</a>
    </article>
  `).join('');
}

function filterBooks() {
  const search = searchInput.value.toLowerCase();
  const genre = genreFilter.value;
  const type = typeFilter.value;

  const filtered = books.filter(book => {
    const matchesSearch = `${book.title} ${book.author} ${book.genre}`.toLowerCase().includes(search);
    const matchesGenre = genre === 'all' || book.genre === genre;
    const matchesType = type === 'all' || book.type === type;
    return matchesSearch && matchesGenre && matchesType;
  });
  renderBooks(filtered);
}

searchInput.addEventListener('input', filterBooks);
genreFilter.addEventListener('change', filterBooks);
typeFilter.addEventListener('change', filterBooks);

document.getElementById('registerForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const mobile = document.getElementById('userMobile').value;
  const plan = document.getElementById('userPlan').value;
  document.getElementById('profileCard').innerHTML = `
    <h3>Demo profile created</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>
    <p><strong>Subscription:</strong> ${plan}</p>
    <p><strong>Books borrowed:</strong> None yet</p>
  `;
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const branch = document.getElementById('contactBranch').value;
  const message = document.getElementById('contactMessage').value;
  const subject = encodeURIComponent(`Archies Library enquiry - ${branch}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nBranch: ${branch}\n\nMessage:\n${message}`);
  window.location.href = `mailto:info@example.com?subject=${subject}&body=${body}`;
});

loadBooks();
