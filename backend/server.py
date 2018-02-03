import petname
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

@app.route('/')
def main():
    return """Hi! Available routes are: <br>
            /<location> <br>
            /message/<tag> <br>
            /message/create/<tag> \n
        """

@app.route('/<location>')
def init(location):
    userName = petname.Generate()
    return 'This will return the relevant tags based on location. The location passed in was {}. The generated username is <strong>{}</strong>'.format(location, userName)

@app.route('/message/<tag>')
def viewChat(tag):
    return 'This is the route you will call to view a message. The tag you passed in was %s' % tag

@app.route('/message/create/<tag>')
def createTag(tag):
    return 'This will be the route you call when creating a new tag. The tag you passed in was %s' % tag

if __name__ == "__main__":
    app.run()
