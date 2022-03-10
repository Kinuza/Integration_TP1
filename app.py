from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def accueil():
    # aller à la base de données (bd)
    return render_template("accueil.html")

@app.route('/formulaire')
def form():
    return render_template("formulaire.html")

@app.route('/table')
def table():
    return render_template("table.html")


if __name__ == "__main__":
    app.run(debug=True)
