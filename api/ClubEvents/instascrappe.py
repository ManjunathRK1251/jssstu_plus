
import pymongo
from flask import Flask, jsonify, request, session, redirect
from instagramy import InstagramPost, InstagramUser, InstagramHashTag
from pprint import pprint
import json
import datetime
import smtplib

app = Flask(__name__)
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'

# Database
# client = pymongo.MongoClient('localhost', 27017)
# db = client.College

#
url = "mongodb+srv://user1234:59dLdTzaKaqimTt@user.vl67u.mongodb.net/user_login_system?retryWrites=true&w=majority"
client = pymongo.MongoClient(url)
db = client.College


class Clubs:
    def sendmail(self):
        users = db.user
        lst = []
        for post in users.find():
            lst.append(post['email'])
            mail=post['email']
            s = smtplib.SMTP('smtp.gmail.com', 587)
            s.starttls()
            s.login("sender_email_id", "sender_email_id_password")
            message = "Message_you_need_to_send"
            s.sendmail("sender_email_id", mail, message)
            s.quit()
        print(lst)

    def scrape(self,club_name):
        session_id = "38566737751%3Ah7JpgePGAoLxJe%334"
        try:
            user = InstagramUser(club_name, sessionid=session_id)
        except:
            return jsonify({"error":"website under modification"}), 400
        lst_posts = user.posts
        posts = []
        for post in lst_posts:
            post_det = post._asdict()
            var = {
                    "name": club_name,
                    "short_code": post_det['shortcode'],
                    "post_caption": post_det['caption'],
                    "date_of_post": post_det['taken_at_timestamp'].strftime('%m/%d/%Y'),
                    "post_url": post_det['post_url'],
                    "media_url": post_det['post_source']
            }
            if db.evnts.find_one({"short_code": var['short_code']}):
                continue
            db.evnts.insert_one(var)
            # Clubs.sendmail(self)
            print("succesfully updated")


# def scrape(self):
#         session_id = "38566737751%3Ah7JpgePGAoLxJe%334"
#         club_name = 'linuxcampusclub'
#         user = InstagramUser(club_name, sessionid=session_id)
#         print(user.is_verified)
#         print(user.biography)
#         lst_posts = user.posts
#         print(lst_posts)
#         print(type(lst_posts))
#         # for pos in lst_posts:
#         #     pprint(pos._asdict())
#         print(lst_posts[0])
#         pprint((lst_posts[0]._asdict()))
#         posts = []
#         for post in lst_posts:
#             post_det = post._asdict()
#             posts.append(
#                 {
#                     "name": club_name,
#                     "short_code": post_det['shortcode'],
#                     "post_caption": post_det['caption'],
#                     "date_of_post": post_det['taken_at_timestamp'].strftime('%m/%d/%Y'),
#                     "post_url": post_det['post_url'],
#                     "media_url": post_det['post_source']
#                 }
#             )
#         print(posts)
#         pprint(json.dumps(posts))


club_name = 'gdscjssstu'
ob=Clubs()
print(ob.scrape(club_name))
ob.sendmail()