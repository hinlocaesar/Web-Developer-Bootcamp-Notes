let body = document.querySelector('body');


const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`, config)

    makeImage(res.data);
    form.elements.query.value = "";
})



//display images
function makeImage(shows) {

    //delete images
    deleteMovieListDisplay();


    //make images
    for (let movie of shows) {
        if (movie.show.image != null) {
            const img = document.createElement('IMG');
            img.src = movie.show.image.medium;
            body.append(img);
        }
    }
}

//delete images after new search
function deleteMovieListDisplay() {
    let movieImages = document.querySelectorAll('img');
    for (let image of movieImages) {
        image.remove();
    }


}
