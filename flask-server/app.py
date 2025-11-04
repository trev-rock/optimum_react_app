from flask import Flask, jsonify
import requests

app = Flask(__name__)

trending_url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2025&sort_by=popularity.desc"
headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzAwOGMxOWI0NGI4ZTExZmM5MDA1MDBlODdhODkwOCIsIm5iZiI6MTc2MjIxOTgzNS4yMjg5OTk5LCJzdWIiOiI2OTA5NTczYjY0NGM2MmUzNTRjOTY0ZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7QYc4Fg5bFeKD5K7BFfDjbFk2VzeO1w57ShQ5QFk4lA"
}

@app.route("/getmovies",methods=["GET"])
def get_trending_list():
    tmdb_response = requests.get(trending_url, headers=headers)
    data = tmdb_response.json()
    response = jsonify(data["results"])
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route("/movie/<movie_id>")
def get_details(movie_id):
    detail_url = f"https://api.themoviedb.org/3/movie/{movie_id}?language=en-US"
    response = requests.get(detail_url, headers=headers)
    response.headers.add("Access-Control-Allow-Origin", "*")
    data = response.json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)