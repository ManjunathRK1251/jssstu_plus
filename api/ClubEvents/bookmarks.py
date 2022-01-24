import pymongo
from flask import Flask, jsonify, request
from pprint import pprint
import  uuid
app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
#Local Database
# client = pymongo.MongoClient('localhost', 27017)
# db = client.College

#Atlas
url = "mongodb+srv://user1234:59dLdTzaKaqimTt@user.vl67u.mongodb.net/user_login_system?retryWrites=true&w=majority"
client = pymongo.MongoClient(url)
db = client.College


class Bookmarks:
    def bookmark(self,email,short_code,club_name):
        if db.bookmark.findOne({"short_code": short_code}):
            return jsonify({'error':"Already Bookmarked"})
        var={
            "_id": uuid.uuid4().hex,
            'email':email,
            'short_code':short_code,
            'club_name':club_name
        }
        db.evnts.insert_one(var)

    def delet(self,email,short_code):
        db.bookmark.delete_one({"short_code":short_code,"email":email})

    def findall(self,email):
        bkmarks=db.bookmark.find({"email":email})
        return jsonify(bkmarks)

    def find_one(self,email,short_code):
        post_det=db.bookmark.findOne({"short_code": short_code,'email':email},{'_id':0})
        return jsonify(post_det)
