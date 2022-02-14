import BookCollection from './modules/bookCollection.js';
import addNavigation from './modules/addNavigation.js';

const bookListWrapper = document.getElementById('bookList');
const addBookForm = document.getElementById('addBookForm');
const bookCollection = new BookCollection(bookListWrapper);

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = Date.now().toString();
  const title = addBookForm.title.value.trim();
  const author = addBookForm.author.value.trim();

  bookCollection.addBookToCollection({
    id,
    title,
    author,
  });

  addBookForm.title.value = '';
  addBookForm.author.value = '';
});

const navigations = [
  {
    linkId: 'listMenuLink',
    targetId: 'listSection',
  },
  {
    linkId: 'addMenuLink',
    targetId: 'addSection',
  },
  {
    linkId: 'contactMenuLink',
    targetId: 'contactSection',
  },
];

addNavigation(navigations);