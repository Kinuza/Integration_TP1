from flask import Flask, render_template
app = Flask(__name__, static_url_path='/static')

@app.route('/')
def accueil():
    return render_template("home.html")

@app.route('/account')
def form():
    return render_template("account.html")

@app.route('/shop')
def table():
    return render_template("shop.html")


if __name__ == "__main__":
    app.run(debug=True)
