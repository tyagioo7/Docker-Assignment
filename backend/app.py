from flask import Flask , request , jsonify


app = Flask(__name__)


@app.route("/api/tasks" , methods=["POST"])
def add_task():


    print("working fine")

    data = request.get_json()

    return jsonify({
        "message": "task received successfully",
        "task": data
    }), 201



if __name__ == '__main__':

    app.run(host="0.0.0.0", port=5000, debug=False)