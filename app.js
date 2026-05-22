const books = [
  {title:'Atomic Habits',author:'James Clear',category:'Self Help',price:'From AED 10'},
  {title:'The Alchemist',author:'Paulo Coelho',category:'Fiction',price:'From AED 10'},
  {title:'Rich Dad Poor Dad',author:'Robert Kiyosaki',category:'Business',price:'From AED 10'},
  {title:'Think and Grow Rich',author:'Napoleon Hill',category:'Business',price:'From AED 8'},
  {title:'The 5 AM Club',author:'Robin Sharma',category:'Self Help',price:'From AED 8'},
  {title:'Harry Potter',author:'J. K. Rowling',category:'Fiction',price:'From AED 12'},
  {title:'Asterix Comics',author:'René Goscinny',category:'Comics',price:'From AED 6'},
  {title:'Diary of a Wimpy Kid',author:'Jeff Kinney',category:'Children',price:'From AED 6'}
];
const grid=document.getElementById('booksGrid');
const searchInput=document.getElementById('searchInput');
const categoryFilter=document.getElementById('categoryFilter');
function renderBooks(list){
  grid.innerHTML=list.map(b=>`<article class="book-card"><div class="book-cover">${b.title}</div><div class="book-body"><h3>${b.title}</h3><p>${b.author}</p><span class="chip">Rent</span><span class="chip buy">Buy</span><p><strong>${b.price}</strong></p></div></article>`).join('') || '<p>No books found. Try another search.</p>';
}
function filterBooks(){
  const q=searchInput.value.toLowerCase();
  const cat=categoryFilter.value;
  renderBooks(books.filter(b=>(cat==='all'||b.category===cat) && (`${b.title} ${b.author} ${b.category}`.toLowerCase().includes(q))));
}
document.getElementById('searchBtn').addEventListener('click',filterBooks);
searchInput.addEventListener('input',filterBooks);categoryFilter.addEventListener('change',filterBooks);
document.querySelectorAll('.quick-tags button').forEach(btn=>btn.addEventListener('click',()=>{searchInput.value=btn.dataset.key;filterBooks();}));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('navMenu').classList.toggle('open'));
renderBooks(books.slice(0,5));
