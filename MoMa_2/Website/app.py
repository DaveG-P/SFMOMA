import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

# The database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:2028@localhost/MOMA"

db = SQLAlchemy(app)

# Artists in Collection
class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String)
    Gender = db.Column(db.String)
    Nationality = db.Column(db.String)
    Born = db.Column(db.Integer)


    def __repr__(self):
        return '<artists %r>' % (self.Name)

# Artworks in Collection
class Artwork(db.Model):
    __tablename__ = 'artworks'

    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String)
    Title = db.Column(db.String)
    Date = db.Column(db.Integer)
    Medium = db.Column(db.String)
    Classification = db.Column(db.String)


    def __repr__(self):
        return '<artworks %r>' % (self.Name)
# Create database tables
@app.before_first_request
def setup():
    pass
    # Recreate database each time for demo
    # db.drop_all()
    # db.create_all()
# ------------------------------------------------------------- #
# This runs the website
@app.route("/")
def home():
    return render_template('dashboard.html')

@app.route("/map")
def map():
    return render_template('maps.html')

@app.route("/table")
def table():
    return render_template('table.html')

# ------------------------------------------------------------- #
####################
# Creating API
####################

# 15.3 Activities

# API for Artists csv
@app.route("/api/artists")
def api_artists():
        # query for the top 20 data
        #Add Birth Year and living Status---------#

    results = db.session.query(Artist.Name, Artist.Nationality, Artist.Gender).\
        limit(20).all()
    df = pd.DataFrame(results, columns=['Artists', 'Nationality', 'Gender', 'Birth Year', 'Living Status'])

    # Format the data for Plotly
    return jsonify(df.to_dict(orient= "records"))

# API for Artworks in collection
@app.route("/api/artworks")
def api_artworks():
    # query for the top 20 data
    results = db.session.query(Artwork.Name, Artwork.Title, Artwork.Date, Artwork.Classification, Artwork.Medium).\
        limit(20).all()
    df = pd.DataFrame(results, columns=['Artist', 'Title', 'Date', 'Classification', 'Medium'])

    # Format the data for Plotly
    return jsonify(df.to_dict(orient= "records"))

# ------------------------------------------------------------- #

if __name__ == "__main__":
    app.run(debug=True)
