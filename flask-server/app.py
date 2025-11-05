from flask import Flask, jsonify
import requests
import os
from dotenv import load_dotenv 

load_dotenv()
app = Flask(__name__)

API_KEY = os.getenv("API_KEY")

headers = {
    "accept": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# @app.route("/",methods=["GET"]) for testing purposes
@app.route("/getmovies",methods=["GET"])
def get_trending_list():
    try: 
        trending_url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2025&sort_by=popularity.desc"
        tmdb_response = requests.get(trending_url, headers=headers)
        data = tmdb_response.json()
        response = jsonify(data["results"])
        # response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    except Exception as e:
        print("There was an error in (route name)",e)
    

@app.route("/movie/<movie_id>")
def get_details(movie_id):
    try:
        detail_url = f"https://api.themoviedb.org/3/movie/{movie_id}?language=en-US"
        response = requests.get(detail_url, headers=headers)
        # response.headers.add("Access-Control-Allow-Origin", "*")
        data = response.json()
        return jsonify(data)
    except Exception as e:
        print("There was an error in (route name)",e)

if __name__ == "__main__":
    app.run(debug=True)