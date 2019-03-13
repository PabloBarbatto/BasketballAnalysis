from flask import Flask, jsonify, render_template, request
import pandas as pd
import sys
import os
import pickle
from math import sqrt
import numpy as np
import json


app = Flask(__name__)


@app.route("/")
def welcome():
        """Basketball Shot Predictor"""
        return render_template("index.html")

@app.route("/projectsummary")
def summary():
        """Basketball Summary"""
        return render_template("projectsummary.html")

@app.route("/models/<player>/<coor_x>/<coor_y>")
def player_model(player,coor_x,coor_y):
    playername = player.replace(' ', '_')
    filename = str('model_'+playername+".sav")
    listofmodels = os.listdir("models/")
    coor_x = float(coor_x)
    coor_y = float(coor_y)
    
    if coor_y < 47:
        home_away = 1
        if coor_x <= 25:
            a = 25 - coor_x
            b = coor_y - 5
            c = ( a*a + b*b )
            
            print(" y smaller than 47,x smaller 25 before numpy")
            distance = np.sqrt(c)
            print(" y smaller than 47,x smaller 25 after numpy")
        else:
            a = coor_x - 25
            b = coor_y - 5
            c = ( a*a + b*b )
            print(" y smaller than 47,x bigger 25 before numpy")
            distance = np.sqrt(c)
            print(" y smaller than 47,x bigger 25 after numpy")
    else:
        home_away = 0
        if coor_x <= 25:
            a = 25 - coor_x
            b = 89 - coor_y
            c = ( a*a + b*b )
            print(" y bigger than 47,x smaller 25 before numpy")
            distance = np.sqrt(c)
            print(" y bigger than 47,x smaller 25 after numpy")
        else:
            a = coor_x - 25
            b = 89 - coor_y
            c = ( a*a + b*b )
            print(" y bigger than 47,x bigger 25 before numpy")
            distance = np.sqrt(c)
            print(" y bigger than 47,x bigger 25 after numpy")
        pass

    if filename in listofmodels :
        model = pickle.load(open("models/"+ filename +"", 'rb'))
        result = model.predict([[home_away,distance,coor_x,coor_y]])
        r = result.tolist()
        return json.dumps(r)
        print(model.predict([[1,distance,coor_x,coor_y]]))
        print("inside if ",filename)
    else:
        print("notfound")
    print("Pablo")    
    return("<p>hi</p>")
        # try:
        #     if "models/model_"+playername+".sav")):
        #         pass
        #     else:
        #         pass        
        # except Exception as e:
        #     print(e)

        #     pass 
        # return jsonify({"error": f"Error in code check execptions"}), 404
            

        #     pass 
        # return jsonify({"error": f"Error in code check execptions"}), 404
if __name__ == "__main__":
    app.run(debug=True)