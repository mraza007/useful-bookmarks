import requests
from flask import Flask , render_template
app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def home():
	# hackernews api
	r = requests.get('https://sheetdb.io/api/v1/wqkryhzd2zqfs')
	data = r.json()
	# json_data = dict(data)
	# print(data)
	# print(json_data)
	return render_template('index.html',data=data)

if __name__ == '__main__':
	app.run()
