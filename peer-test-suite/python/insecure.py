import pickle
import os
from flask import Flask, request
# PEER-AUTOFIX start [findingId=ai rule=ai-minimal analyzer=autofix ts=1760254111330]
# 
import json
# PEER-AUTOFIX end [findingId=ai]
app = Flask(__name__)
# PEER-AUTOFIX start [findingId=ai rule=ai-minimal analyzer=autofix ts=1760254111330]
# 
import shlex
# PEER-AUTOFIX end [findingId=ai]
@app.route('/exec', methods=['POST'])
def exec_cmd():
    data = request.form.get('data')
    # unsafe deserialization
# PEER-AUTOFIX start [findingId=undefined rule=unsafe-deserialization-py (CWE-502) analyzer=autofix ts=1760254111328]
#     obj = pickle.loads(data)  # CWE-502
    obj = pickle.loads(data)  # CWE-502
# PEER-AUTOFIX end [findingId=undefined]
    # shell injection
# PEER-AUTOFIX start [findingId=undefined rule=command-injection analyzer=autofix ts=1760254111328]
#     os.system("ls " + data)   # CWE-78
    os.system("ls " + data)   # CWE-78
# PEER-AUTOFIX end [findingId=undefined]
    return "donee"
