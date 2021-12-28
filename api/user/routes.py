from flask import Flask
from app import app
from user.models import User


@app.route('/login', methods=['POST'])
def login():
  # return User().login()
  return  "Hello"