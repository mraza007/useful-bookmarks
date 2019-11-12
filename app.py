import requests
from flask import Flask , render_template
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def home():
	# hackernews api
	r = requests.get('https://api.sheety.co/95526108-99ce-4ad2-bb73-87dbde06ba35')
	data = r.json()
	# json_data = dict(data)
	# print(data)
	# print(json_data)
	return render_template('index.html',data=data)

if __name__ == '__main__':
	app.run()
