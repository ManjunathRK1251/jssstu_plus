import json
from functools import wraps
import pymongo
from flask import Flask, jsonify, request, session, redirect, url_for
from passlib.hash import pbkdf2_sha256
import uuid
from flask_apscheduler import  APScheduler
from ClubEvents import bookmarks,instascrappe
import  schedule
from apscheduler.schedulers.background import BackgroundScheduler
import  time
import atexit
app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
scheduler=APScheduler()

# Database
# client = pymongo.MongoClient('localhost', 27017)
# db = client.user_login_system


url = "mongodb+srv://user1234:59dLdTzaKaqimTt@user.vl67u.mongodb.net/user_login_system?retryWrites=true&w=majority"
client = pymongo.MongoClient(url)
db = client.College

class User:

    def start_session(self, user):
        print(user)
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def signup(self, name, email, password):
        # print(request.form)

        # Create the user object
        print("hello")
        user = {
            "_id": uuid.uuid4().hex,
            "name": name,
            "email": email,
            "password": password
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        # Check for existing email address
        if db.users.find_one({"email": user['email']}):
            return jsonify({"error": "Email address already in use"}), 400

        if db.users.insert_one(user):
            self.start_session(user)
            return jsonify({"message":"Succesfully signed up"})

        return jsonify({"error": "Signup failed"}), 400

    def signout(self):
        session.clear()
        return redirect('/dashboard')

    def login(self, email, password):
        print("Hello", email, password)

        user = db.users.find_one({
            "email": email
        })
        print(pbkdf2_sha256.verify(password, user['password']))
        if user and pbkdf2_sha256.verify(password, user['password']):
            print("Login sucessful")
            self.start_session(user)
            return jsonify({"message":"Sucessfully Logged in"})

        return jsonify({"error": "Invalid login credentials"}), 401


# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')


# Routes
@app.route('/')
def home():
    return  "Hello World..........."


@app.route('/home')
def test():
    return  "Hello ..."


@app.route('/dashboard/')
# @login_required
def dashboard():
    values = db.users.find()
    lst = []
    for item in values:
        lst.append(item)
    return jsonify(lst)


@app.route('/user/signup', methods=['POST'])
def signup():
    body = request.json
    print(body)
    print(body['email'], body['password'])
    return User().signup(body['name'], body['email'], body['password'])


@app.route('/user/signout')
def signout():
    return User().signout()


@app.route('/user/login', methods=['POST'])
def login():
    if request.method == 'POST':
        body = request.json
        print(body)
        return  User().login(body['email'], body['password'])

@app.route('/clubevents')
def events():
    club_names=['linuxcampusclub','gdscjssstu']
    for club in club_names:
        ob=instascrappe.Clubs
        ob.scrape(club)


@app.route('/evntinfo')
def evnt():
    users = db.evnts
    lst = []
    for post in users.find({},{'_id':0}):
        lst.append(post)
    print(lst)
    return jsonify(lst)


@app.route('/user/bookmark',methods=['POST'])
def bookmark():
    if request.method == 'POST':
        body = request.json
        print(body)
        ob = bookmarks.Bookmarks
        ob.bookmark((body['email'],body['short_code']))
        return jsonify({"message":"sucessfully Bookmarked"})


@app.route('/user/bookmark/delete',methods=['POST','GET'])
def bkmarkdel():
    if request.method == 'POST':
        body = request.json
        print(body)
        ob = bookmarks.Bookmarks
        print(ob.delet((body['email'],body['short_code'])))
        return jsonify({"message":"sucessfully Deleted"})


@app.route('/user/bookmark/find_one',methods=['POST','GET'])
def findone():
    if request.method == 'POST':
        body = request.json
        print(body)
        ob = bookmarks.Bookmarks
        val=ob.find_one((body['email'],body['short_code']))
        return val


@app.route('/user/bookmark/findall/')
def findall(email):
    bkm = db.bookmarks
    lst = []
    for post in bkm.find({},{'_id':0}):
        if post['email']==email:
            lst.append(post)
    print(lst)
    return jsonify(lst)


if __name__ == "__main__":
    #TODO scheduling scrapping call
    # scheduler.add_job(id="Instagram Scrapping",func=events,trigger='interval',days=1)
    # scheduler.start()
    # Shut down the scheduler when exiting the app
    # atexit.register(lambda: scheduler.shutdown())
    # TODO Valid return statements for all routes
    # TODO to filter correct values from database
    ##For testing
    # schedule.every().day.at("12:00").do(events)
    # scheduler = BackgroundScheduler()
    # scheduler.add_job(func=events, trigger="interval", seconds=60)
    # scheduler.start()
    app.run(debug=True)
