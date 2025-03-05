

const apiKey = '30b06fb71d6587a0a5c6e8b2336dbdad';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchApi = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`;

const apiLink =  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;


const form = document.getElementById("form");
const main = document.getElementById("section");
// const movieInput2 = document.getElementsByClassName("query");
const search = document.getElementById("query");


function returnMovie(url) {

    try {

        

        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data.results);
            data.results.forEach(element => {
                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const center= document.createElement('center');
                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');

                const title = document.createElement('h1');
                title.setAttribute('class', 'movieName');
                

                const imgDesc = document.createElement('p');
                imgDesc.style.display = "100%";

                // div_row.classList.add("row");
                // div_column.classList.add("column");
                // div_card.classList.add("card");
                // image.classList.add("thumbnail");
                
                // title.classList.add("movieName")

                
                title.innerHTML = `${element.title}`;
                image.src = imgPath + element.poster_path;
                center.appendChild(image);
                center.appendChild(imgDesc);
                center.appendChild(title);

                div_card.appendChild(center);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        })
        .catch(error => console.error(error));

    } catch(error) {
        console.error(error);
    }
    
}

returnMovie(apiLink)

form.addEventListener("submit", event => {

    event.preventDefault();

    main.innerHTML = '';

    const searchItem = search.value;
    console.log(searchItem);

    if (searchItem) {
        returnMovie(`${searchApi}${searchItem}`);
        search.value = "";
    }

});