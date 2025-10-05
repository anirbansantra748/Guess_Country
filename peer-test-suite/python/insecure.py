import pickle
import os
from flask import Flask, request

app = Flask(__name__)

@app.route('/exec', methods=['POST'])
def exec_cmd():
    data = request.form.get('data')
    # unsafe deserialization
    obj = pickle.loads(data)  # CWE-502
    # shell injection
    os.system("ls " + data)   # CWE-78
    return "donee"
