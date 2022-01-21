
from functools import wraps
import pymongo
from flask import Flask, jsonify, request, session, redirect, url_for
from passlib.hash import pbkdf2_sha256
import uuid

app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'

# Database
# client = pymongo.MongoClient('localhost', 27017)
# db = client.user_login_system


url = "mongodb+srv://user1234:59dLdTzaKaqimTt@user.vl67u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = pymongo.MongoClient(url)
db = client.user_login_system


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
            return self.start_session(user)

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
            return self.start_session(user)

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
    print(User().login(body['email'], body['password']))
    return User().signup(body['name'], body['email'], body['password'])


@app.route('/user/signout')
def signout():
    return User().signout()


@app.route('/user/login', methods=['POST'])
def login():
    if request.method == 'POST':
        body = request.json
        print(body)
        print(User().login(body['email'], body['password']))
        return jsonify(body)


if __name__ == "__main__":
    app.run(debug=True)