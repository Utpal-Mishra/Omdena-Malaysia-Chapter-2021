from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np

# Keras
from tensorflow.keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
#from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

# Model saved with Keras model.save()
MODEL_PATH ='banana_model_densenet201.h5'
banana_model = load_model(MODEL_PATH)

MODEL_PATH ='plant_model_densenet201.h5'
plant_model = load_model(MODEL_PATH)

MODEL_PATH ='village_model_densenet201.h5'
village_model = load_model(MODEL_PATH)


def banana_model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    ## Scaling
    x=x/255
    x = np.expand_dims(x, axis=0)
   
    predict = model.predict(x)
    preds = np.argmax(predict, axis=1)
    #"(" + str((np.count_nonzero(predict == 3)/(len(predict)*len(predict[0])))*100) + ")"
    if preds==0:
        preds="Cordana"
    elif preds==1:
        preds="Healthy"
    elif preds==2:
        preds="Pestalotiopsis"
    else:
        preds="Sigatoka" 
    return preds

def plant_model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224)) #Corn_Blight (1002)

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    ## Scaling
    x=x/255
    x = np.expand_dims(x, axis=0)
   
    predict = model.predict(x)
    preds = np.argmax(predict, axis=1)
    #str((np.count_nonzero(predict == 1)/(len(predict)*len(predict[0])))*100)
    if preds==0:
        preds="Blight"
    elif preds==1:
        preds="Common Rust"
    elif preds==2:
        preds="Gray Leaf Spot"
    else:
        preds="Healthy"
    return preds

def village_model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(50, 50))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    ## Scaling
    x=x/255
    x = np.expand_dims(x, axis=0)
   
    predict = model.predict(x)
    preds = np.argmax(predict, axis=1)
    #"(" + str((np.count_nonzero(predict == 3)/(len(predict)*len(predict[0])))*100) + ")"
    if preds==0:
        preds="Apple: Apple Scab"
    elif preds==1:
        preds="Apple: Black Rot"
    elif preds==2:
        preds="Apple: Cedar Apple Rust"
    elif preds==3:
        preds="Apple: Healthy" 
    elif preds==4:
        preds="Cherry: Healthy" 
    elif preds==5:
        preds="Cherry: Powdery Mildew" 
    elif preds==6:
        preds="Corn: Cercospora Leaf Spot Gray Leaf Spot" 
    elif preds==7:
        preds="Corn: Common Rust" 
    elif preds==8:
        preds="Corn: Healthy" 
    elif preds==9:
        preds="Corn: Northern Leaf Blight" 
    elif preds==10:
        preds="Grapes: Black Rot" 
    elif preds==11:
        preds="Grapes: Black Measles" 
    elif preds==12:
        preds="Grapes: Healthy" 
    elif preds==13:
        preds="Grapes: Leaf Blight (Isariopsis Leaf Spot)" 
    elif preds==14:
        preds="Orange: Haunglongbing" 
    elif preds==15:
        preds="Peach: Bacterial Spot" 
    elif preds==16:
        preds="Peach: Healthy" 
    elif preds==17:
        preds="Pepper, Ball: Bacterial Spot" 
    elif preds==18:
        preds="Pepper, Ball: Healthy" 
    elif preds==19:
        preds="Potato: Early Blight" 
    elif preds==20:
        preds="Potato: Healthy" 
    elif preds==21:
        preds="Potato: Late Blight" 
    elif preds==22:
        preds="Rasberry: Healthy" 
    elif preds==23:
        preds="Soyabean: Healthy" 
    elif preds==24:
        preds="Squash: Powdery Mildew" 
    elif preds==25:
        preds="Strawberry: Healthy" 
    elif preds==26:
        preds="Strawberry: Leaf Scorch" 
    elif preds==27:
        preds="Tomato: Bacteria Spot" 
    elif preds==28:
        preds="Tomato: Early Blight" 
    elif preds==29:
        preds="Tomato: Healthy" 
    elif preds==30:
        preds="Tomato: Late Blight" 
    elif preds==31:
        preds="Tomato: Leaf Mold" 
    elif preds==32:
        preds="Tomato: Septoria Leaf Spot" 
    elif preds==33:
        preds="Tomato: Two-Spotted Spider Mite" 
    elif preds==34:
        preds="Tomato: Target Spot"
    elif preds==35:
        preds="Tomato: Leaf Mold" 
    elif preds==36:
        preds="Tomato: Mosaic Virus" 
    elif preds==37:
        preds="Tomato: Yellow Leaf Curl Virus"  
    return preds


@app.route('/', methods=['GET'])
def home():
    # Main page
    return render_template('home.html')

@app.route('/banana_model', methods=['GET'])
def banana_index():
    # Banana Leaf Classification Page
    return render_template('banana_index.html')

@app.route('/plant_model', methods=['GET'])
def plant_index():
    # Plant Disease Data Page
    return render_template('plant_index.html')

@app.route('/village_model', methods=['GET'])
def village_index():
    # Plant Disease Data Page
    return render_template('village_index.html')


@app.route('/banana_model/predict', methods=['GET', 'POST'])
def banana_upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'Uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        result = banana_model_predict(file_path, banana_model)
        return result
    return None

@app.route('/plant_model/predict', methods=['GET', 'POST'])
def plant_upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'Uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        result = plant_model_predict(file_path, plant_model)
        return result
    return None

@app.route('/village_model/predict', methods=['GET', 'POST'])
def village_upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'Uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        result = village_model_predict(file_path, village_model)
        return result
    return None


if __name__ == '__main__':
    app.run(debug=True)
