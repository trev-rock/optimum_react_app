This project is built using React for the frontend and Python for the backend.

Backend:
For this I used the Flask library to create a server API that would pull from the TMDB API using the key from an .env file. I used the os and dotenv libraries in order to load the API key that is hidden. The requests library is used for fetching the information with the url provided to it as well as everything from headers.

I ran into difficulty with my React app itself and interacting with the Python server. I ran into CORS issues and tried various means to solve them, from setting a value in the header to experimenting with an additional package, all to no avail. I used sample data from the TMDB by manually making requests in order to replicate the data that it would pull and put it into js files.

Frontend:
I used React to create my app. I left in code and commented it out that would have utilized the flask server to pull the initial information. The app consists of a header and a list of movies that the user can click into to find more information about them or they can favorite them.

I used useState to save variables across the different components and pass them as props to child components, to keep track of when the details of a movie were to be viewed, and to keep track of which movies are favorited and are not. UseEffect was used to load the sample data from the js files.

Their favorites are saved locally so when the webpage is reloaded they can see which they already favorited or not.

With some extra time I would have liked to create a welcome screen that would then have a button to offer the user to discover the trending movies from the flask-serverl instead of loading it in by default.