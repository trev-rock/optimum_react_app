from flask import Flask
import requests
import json

app = Flask(__name__)

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzAwOGMxOWI0NGI4ZTExZmM5MDA1MDBlODdhODkwOCIsIm5iZiI6MTc2MjIxOTgzNS4yMjg5OTk5LCJzdWIiOiI2OTA5NTczYjY0NGM2MmUzNTRjOTY0ZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7QYc4Fg5bFeKD5K7BFfDjbFk2VzeO1w57ShQ5QFk4lA"
    }

@app.route("/")
def get_top_movies():
    global movie_id
    url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2025&sort_by=popularity.desc"

    # response 1, convert data to json
    # to do - sort them into a dictionary with each movie being the key name and the id being its value so they can be used in the second fetch
    response = requests.get(url, headers=headers)
    data = response.json()
    data = data["results"]
    movie_id = data[0]["id"]

@app.route('/movies/{movie_id}')
def get_movie_details():
    global movie_id
    # fetch 2
    url_2 = f"https://api.themoviedb.org/3/movie/{movie_id}?language=en-US"
    response_2 = requests.get(url_2, headers=headers)
    data_2 = response_2.json()
    return f"{data_2}"

app.run()