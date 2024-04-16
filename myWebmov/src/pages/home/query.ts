export const fetchMovies = async () => {
    const res = await fetch(
            
           "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        { 
            
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDU1NmIwMzgyNWU2NmExODNjYzU2ODlhM2M5MTM3YSIsInN1YiI6IjY1ZTRkYmMwOTk3OWQyMDE3Y2IyZDEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvY3KPjyvc89j49uNPSpo51B_BAuV0SgHhvQ0ZqQkN4"

        },
    }
        );

        console.log(res.json);

        return res.json();
};

export const fetchTVShows = async () => {
    const res = await fetch(
        
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        { 
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDU1NmIwMzgyNWU2NmExODNjYzU2ODlhM2M5MTM3YSIsInN1YiI6IjY1ZTRkYmMwOTk3OWQyMDE3Y2IyZDEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvY3KPjyvc89j49uNPSpo51B_BAuV0SgHhvQ0ZqQkN4"

        },
    }
        );

        console.log(res.json);

        return res.json();
};