from flask import Flask, render_template, request
import json
 
app = Flask(__name__)
 
@app.route('/')
def index(user=None):
    return render_template('index.html')

@app.route('/people')
def people(user=None):
	f = open('people.json', 'r')
	json_raw = f.read()
	json_decoded = json.loads(json_raw)
	return render_template('people.html', people=json_decoded['people'])

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