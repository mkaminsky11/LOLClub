from flask import Flask, render_template, request
 
app = Flask(__name__)
 
@app.route('/')
def index(user=None):
    return render_template('index.html')

@app.route('/people')
def people(user=None):
    return render_template('people.html')

@app.route('/events')
def events(user=None):
    return render_template('events.html')

@app.route('/contact')
def contact(user=None):
    return render_template('contact.html')

@app.route('/<path:path>')
def static_proxy(path):
  return app.send_static_file(path)

if __name__ == '__main__':
    app.run()