import './image.json';
import ApiService from './apiService';
import templates from './templates/imageCard.hbs';
import './css/styles.css'


const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};  
const apiService = new ApiService();
    
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
//refs.loadMoreBtn.addEventListener('click', scrollToHandler);

let scrollValue = 0;

function onSearch(event){
        event.preventDefault();

        cleargallery();
        apiService.query = event.currentTarget.elements.query.value;
        apiService.resetPage();
        apiService.fetchImage().then(appendGalleryHits);
}
function onLoadMore(){
    apiService.fetchImage().then(appendGalleryHits);
}

function appendGalleryHits(hits) {
    scrollPages();
    refs.gallery.insertAdjacentHTML('beforeend', templates(hits));
}

function cleargallery() {
    refs.gallery.innerHTML = '';
}

// function scrollToHandler(){
//     //console.log(window.pageYOffset);
//   return window.scrollTo({
//       top: 550,
//       behavior: "smooth",
//   });
// }

// function appendGalleryHits(hits) {
// refs.gallery.insertAdjacentHTML('beforeend', templates(hits));
// }

function scrollPages() {
//получаем высоту страницы
const scrollValue = document.documentElement.scrollHeight;
//реализуем асинхронный scrollTo, чтобы метод корректно работал
setTimeout(() => {
window.scrollTo({
top: scrollValue,
behavior: 'smooth',
});
}, 100);
}

