from functools import wraps

import pymongo
from flask import Flask, session, redirect, jsonify
from user import routes

app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'

# Database
client = pymongo.MongoClient('localhost', 27017)
db = client.user_login_system


# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')

    return wrap


# Routes


@app.route('/')
def home():
    return "<p>The home page</p>"
    # return render_template('home.html')


@app.route('/dashboard/')
def dashboard():
    values =db.users.find({ },{'_id':0})
    lst=[]
    for item in values:
        lst.append(item)
    return jsonify(lst)





@app.route('/Init/')
def init():
    dictionarylist = [
        {
            "id": 0,
            "first_name": "Melanie Dooley",
            "email": "Juliet_Kilback@hotmail.com",
            "password": "a5812uB9wAzBs3N"
        },
        {
            "id": 1,
            "first_name": "Spencer Harris DVM",
            "email": "Iva44@hotmail.com",
            "password": "zZLhOVw_IeYQqpI"
        },
        {
            "id": 2,
            "first_name": "Marty Gorczany IV",
            "email": "Reta6@hotmail.com",
            "password": "P2CtYTT_4hkZU8j"
        },
        {
            "id": 3,
            "first_name": "Rick Carroll Sr.",
            "email": "Carrie83@hotmail.com",
            "password": "0psstUqveBBatc3"
        },
        {
            "id": 4,
            "first_name": "Olga Spencer",
            "email": "Orie_Lynch@hotmail.com",
            "password": "zem4fliS8kvYvjf"
        },
        {
            "id": 5,
            "first_name": "Silvia Gusikowski",
            "email": "Flavie13@yahoo.com",
            "password": "26hTGdlaFBbOKCa"
        },
        {
            "id": 6,
            "first_name": "Dallas Schmitt",
            "email": "Kurtis1@gmail.com",
            "password": "0BfTtq9QlMwdx0B"
        },
        {
            "id": 7,
            "first_name": "Arlene Simonis",
            "email": "Brad43@gmail.com",
            "password": "n0J3MtJqUcvjigL"
        },
        {
            "id": 8,
            "first_name": "Joann Davis",
            "email": "Cleo.Kiehn@gmail.com",
            "password": "CRRbz4x_Be_vY2D"
        },
        {
            "id": 9,
            "first_name": "Joy Lubowitz",
            "email": "Kenna_Okuneva@gmail.com",
            "password": "JN6rZWetWWOPP0e"
        },
        {
            "id": 10,
            "first_name": "Duane Raynor",
            "email": "Kellie.Pfannerstill@hotmail.com",
            "password": "UdQu2H7uhxfweWv"
        },
        {
            "id": 11,
            "first_name": "Wilbert Pfeffer",
            "email": "Michel.Senger@yahoo.com",
            "password": "y4xGTFKW0L3qD8n"
        },
        {
            "id": 12,
            "first_name": "Hugh Kub",
            "email": "Gunnar34@gmail.com",
            "password": "w24lmTcLnbnsIcN"
        },
    ]
    db.users.insert_many(dictionarylist)
    return 'Updated'


if __name__ == "__main__":
    app.run(debug=True)