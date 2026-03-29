window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        const filmContainer = document.createElement("article");
        filmContainer.id = movie["imdbID"];
        const image = document.createElement("img");
        image.src = movie["Poster"];
        filmContainer.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = movie["Title"];
        filmContainer.appendChild(title);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
          location.href = 'edit.html?imdbID=' + movie.imdbID
        }
        filmContainer.appendChild(editButton);
        
        const runTime = document.createElement("span");
        const rawTime = parseInt(movie["Runtime"]);
        runTime.textContent = ((rawTime/60) - (rawTime%60)/60) + " h " + rawTime%60 + " min";
        filmContainer.appendChild(runTime);

        const releaseDate = document.createElement("time");
        releaseDate.dateTime = movie["Released"];
        releaseDate.textContent = " Released on " + movie["Released"];
        filmContainer.appendChild(releaseDate);

        const genreContainer = document.createElement("p");
        const genres = movie["Genres"];
        genres.forEach(g => {
            const span = document.createElement("span");
            span.classList.add("genre");
            span.textContent = g.trim();
            genreContainer.appendChild(span);
        });
        filmContainer.appendChild(genreContainer);

        const plot = document.createElement("p");
        plot.textContent = movie["Plot"];
        filmContainer.appendChild(plot);

        const director = document.createElement("h3");
        director.textContent = "Directors";
        filmContainer.appendChild(director);

        const directors = document.createElement("p");
        directors.textContent = movie["Directors"];
        filmContainer.appendChild(directors);

        const writer = document.createElement("h3");
        writer.textContent = "Writers";
        filmContainer.appendChild(writer);

        const writers = document.createElement("p");
        writers.textContent = movie["Writers"];
        filmContainer.appendChild(writers);

        const actor = document.createElement("h3");
        actor.textContent = "Actors";
        filmContainer.appendChild(actor);

        const actors = document.createElement("p");
        actors.textContent = movie["Actors"];
        filmContainer.appendChild(actors);

        const ratingsTitle = document.createElement("h3");
        ratingsTitle.textContent = "Ratings";
        filmContainer.appendChild(ratingsTitle);

        const metascore = document.createElement("p");
        metascore.textContent = "Metascore: " + movie["Metascore"];
        filmContainer.appendChild(metascore);

        const imdb = document.createElement("p");
        imdb.textContent = "IMDb Rating: " + movie["imdbRating"];
        filmContainer.appendChild(imdb);

        bodyElement.appendChild(filmContainer);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
