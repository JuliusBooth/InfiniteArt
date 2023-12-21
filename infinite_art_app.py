from flask import Flask, request,  jsonify
from flask_cors import CORS
from gifMaker import make_gif


app = Flask(__name__)
CORS(app)


@app.route('/create_gif', methods=['POST'])
def handle_create_gif():
    data = request.get_json()
    image_url = data['imageUrl']
    gif_url = make_gif(8, image_url)
    return jsonify({'gifUrl': gif_url})

if __name__ == '__main__':
    app.run(debug=True)
