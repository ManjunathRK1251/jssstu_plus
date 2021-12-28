from flask import Flask
from app import app
from user.models import User


@app.route('/login', methods=['GET'])
def login():
  # return User().login()
  return  "Hello"