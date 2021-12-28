from flask import Flask, jsonify, request, session, redirect
# from passlib.hash import pbkdf2_sha256
from app import db
import uuid


class User:
    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def login(self):

        user = db.users.find_one({
            "email": request.form.get('email')
        })

        if user and request.form.get('password') == user['password']:
            return self.start_session(user)

        return jsonify({"error": "Invalid login credentials"}), 401