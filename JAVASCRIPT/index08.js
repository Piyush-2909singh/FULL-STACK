var movies = [];

function addMovie() {

    var name = document.getElementById("name").value;
    var rating = document.getElementById("rating").value;

    var movie = {
        name: name,
        rating: rating
    };

    movies.push(movie);

    console.log(movies);
}


function deleteMovie() {

    var name = document.getElementById("remove").value;

    for (var i = 0; i < movies.length; i++) {

        if (movies[i].name == name) {

            movies.splice(i, 1);

            console.log(movies);

            return;
        }
    }

    console.log("Movie not found");
}