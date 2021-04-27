const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21313289-b7c06230d54dda1d4d871d681';

 export default class GetImageAPI {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

fetchImage() {
    console.log('до запиту:', this);
    
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
   
    return fetch(url)
    .then(r => r.json())
    .then(data => {
        this.page +=1;
       console.log('дісля запиту:', this);
       return data.hits;
    }).catch(error => {
        console.log(error);
    });
}

get query () {
    return this.searchQuery;
}
set query (newQuery) {
    this.searchQuery = newQuery;
}
resetPage () {
    this.page = 1;
}
}