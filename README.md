# Drowsiness-Detection-with-Realtime-GeoLocation-Alert-Sender
This is a Python-based project that uses OpenCV and dlib libraries to detect the drowsiness of a driver in real-time. It can detect if the driver's eyes are closed for a certain amount of time, which could indicate that the driver is drowsy and may fall asleep while driving. Drowsy driving is a major cause of road accidents, especially for long-distance drivers. To address this issue, we have developed a device that can detect a driver's sleepy eyes and send an alert to the driver while also slowing down the vehicle. The device is a combination of hardware and software components, which work together to detect the driver's drowsiness and take appropriate actions to prevent accidents.

# Description
The device consists of the following software components:

1. Image Processing Algorithm: An image processing algorithm is used to analyze the images captured by the camera and detect the driver's drowsiness. The algorithm is designed to detect the following signs of drowsiness:
• Slow eye blinking • Eye closure duration

2. Various libraries are being used here such as: • Tensorflow • Keras • OpenCV • NumPy • Random • OS • PyGame

3. Machine Learning Algorithm: A supervised machine learning algorithm is used to classify the level of drowsiness based on the features extracted from the image processing algorithm.

4. Alert System: An alert system is used to notify the driver when he/she is drowsy.

5. Sending alert to selected contacts for emergency cases.


# Installation
1. Clone the repository.
2. Install the required libraries by running pip install -r requirements.txt in your terminal or command prompt.
3. Download Dataset from here DATASET(link) : https://drive.google.com/drive/folders/12W9DmSf1rk5gZCQvihy1IWFAVoFMrkSh and move it in deskop/drowsiness/models.

# Usage
I had made the work more simpler for you, you just need to run the "execute.bat" file for running the model. But before that you need to perform some steps.
To use the drowsiness detection system, follow these steps:

1. Make sure that all the folders are saved in same sequence as shown in the repositiory.
2. Run the execute.bat file by double clicking on it, rest commands will get executed automatically.
3. Position the camera to capture your face and eyes.
4. If the system detects drowsiness, an alarm will sound.

# How it works?
This software/ML model works as follows:

1. Initially, face is detected on the driver’s seat.
2. Detection of eyes are done in the second step.
3. Then, it tracks the movement of eyes.
4. The images are captured by the camera and detects the driver's drowsiness using the image processing algorithm.
5. The machine learning algorithm classifies the level of drowsiness based on the features extracted from the image processing algorithm.
6. If the driver is drowsy, the alert system notifies the driver through text messages with realtime GPS location, buzzer system which can be easily installed on any wristbands or neckbands.
7. Real-time processing
8. Testing and Evaluation
9. It sends the location of the driver to the selected contacts for emergency cases.

# Note
1. By default trigger is set at the risk%/delay of 8.
2. By default at Risk% 50, the alert message will go to the emergency contacts including the rider and program will get terminated (will surely cahnge it in future updates).
3. Cureently alert system contact can be changed in the code only, there is no GUI interface for it as of now. It's under construction.
4. Realtime GPS location is precise upto 5KM range.

# Tech Stack Used
<a><img src="icons/python.webp" aign="left" height="60" width="60" alt="python"></a>
<a><img src="icons/tensorflow-2.png" aign="left" height="60" width="60" alt="tensorflow"></a>
<a><img src="icons/OpenCV.webp" aign="left" height="60" width="60" alt="openCV"></a>
<a><img src="icons/js.svg" aign="left" height="60" width="60" alt="js"></a>
<a><img src="icons/bash2.png." aign="left" height="60" width="60" alt="bash2"></a>
<a><img src="icons/html5.png" aign="left" height="60" width="60" alt="html5"></a>
<a><img src="icons/css3.png" aign="left" height="60" width="60" alt="css3"></a>

# Demo
1. Demo with PPT and Website integration (YT):  https://youtu.be/DWYiaC8kQsw
2. Demo without PPT and Website integration (G-Drive): 


# Credits
1. https://opencv.org/
2. https://www.tensorflow.org/
3. https://www.pygame.org/

# Contributing
You can help by contributing in the making of GUI interface for the Project, awaring me about any bug you may encounter, last but not the least you can help me in optimising the program to boost its run speed.

# Developer Credit
Keshav Agarwal aka MasterK is the sole owner of this repositiory, and this ML project is developed by him in 2019.

<a href="https://www.linkedin.com/in/keshav-agarwal-0927"><img src="icons/linkedin.webp" align="left" height="60" width="60" alt="LinkedIn"></a>
<a href="https://www.github.com/MasterK0927"><img src="icons/github.svg" align="left" height="65" width="60" alt="Github"></a>




