var movies = [
    {
        id: 1,
        title: 'Dark Knight',
        desc: 'film o przygodach Człowieka Nietoperza',
        photo: 'https://unsplash.it/300/200?image=125'
    },
    {
        id: 2,
        title: 'Ostatni rycerze',
        desc: 'Upadły wojownik powstaje przeciwko skorumpowanemu i sadystycznemu władcy, aby pomścić swojego zhańbionego mistrza',
        photo: 'https://unsplash.it/300/200?image=125'
    },
    {
        id: 3,
        title: 'Labirnt Fauna',
        desc: 'historia małej dziewczynki odnajdującej labirynt',
        photo: 'https://unsplash.it/300/200?image=125'
    },
    {
        id: 4,
        title: 'Spider-Man',
        desc: 'film o superbohaterze',
        photo: 'https://unsplash.it/300/200?image=125'
    }

];

var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.photo}, )
    );
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);
        

ReactDOM.render(element, document.getElementById('app'));
