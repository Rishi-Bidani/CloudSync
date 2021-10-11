# CloudSync

This program will allow you to host your own cloud. The goal is to make a self hosting platform similar to google drive's desktop client,
which will watch changes in a particular folder on your computer and upload those files directly to your server (Yes, the server is also hosted by you!).

During the setup you can choose which folder to watch - this will be referred to as the "watched folder" ahead. 
By default inside the watched folder - this program will ignore all files in a subfolder called "ignored"

Please note that this application is still under development

## Table Of Contents

- [Images](#images):file_folder:
- [Setup Requirements](#setup) :rocket:
- [Development Setup](#development):key:
- [Libraries Used](#dependencies):computer:
- [Future Plans](#plans):bulb:


<br />
<a name="images"></a>

## Images:file_folder:
![image](https://user-images.githubusercontent.com/64310471/136831151-5910edf1-1da6-4091-8304-b893a8a3d780.png)
![image](https://user-images.githubusercontent.com/64310471/136831199-91c015a1-7a85-4765-a551-e75f766c3cad.png)
![image](https://user-images.githubusercontent.com/64310471/136831305-df8a2840-1b5f-4369-9a66-2267616ccdf8.png)

<br />
<a name="setup"></a>

## Setup Requirements :rocket:
- A computer :smiley:
- <a href="https://nodejs.org/en/"> Node.js </a>
- Yarn (please use yarn), it can be downloaded via npm
- <a href="https://golang.org/">Golang</a> - An executable might be available in the future

  ```bash
  npm install -g yarn
  ```
  
  <br />
  <a name="development"></a>
  
## Development Setup :key:
  
  This application has 2 main components - Desktop client and Host Website 
  (These can be found in their respective folders with the same name)
  
  ### Setting up the desktop client
  - Firstly, run the go script under `DESKTOP CLIENT > settings > main.go`
      - This will create a settings.json file (stored in `%APPDATA%/CloudSync` on windows)
      - During the process you will also have to enter a password for yourself, please make sure to 
        note down the encrypted string it generates - this will be entered into a `.env` file 
  
  ### Creating the .env file
  - Create a `.env` file in the following path `HOST WEBSITE > server > .env`
  - Inside this file please add the following fields
  
  ```env
  TOKEN=$2a$10$v.PTzlgYKrypaA1i6fUjl.3JcpesGIEiqKk1b9kLgY2Uyp0/nWZfa
  NODE_ENV=development
  PASSWORD=$2a$10$5CxhfB2fCha9bobt3U0iZOZyt3NO2tDDfSIhfgPzPZjAOAap1ARDq
  ```
  - TOKEN will also be generated when you run the golang program, in case you didn't note this down, it can be found in your settings.json file
  - The password is not saved hence it is necessary to have noted this down during the desktop client setup
  
  ### Running the program
  - Open 3 terminals
  - Terminal 1
      - cd into HOST WEBSITE
      - `yarn start`
  - Terminal 2
    - cd into HOST WEBSITE
    - `cd client`
    - `yarn serve`
  - Terminal 3
    - cd into DESKTOP CLIENT
    - `yarn start`
  
  At this point your setup is complete and you can create or paste files into your "watched" folder and it should appear on the server inside
  a folder called `DATA`
  
  By default the program ignores all files inside a subfolder called `ignore` in your "watched" folder


<br />

<a name="dependencies"></a>

## Libraries used - Links to some main ones :computer:

- <a href = "https://www.npmjs.com/package/express">expressjs</a> with axios, bcrypt, cors, multer, fs, fs-extra
- <a href="https://vuejs.org/">vuejs</a>
- Golang bcrypt

<br />
<a name="plans"></a>
## Future Plans :bulb:

- [x] Download files
- [x] Basic login feature
- [ ] Implement sessions
- [ ] Download entire folder
- [ ] Fix the buggy uploads for large files
- [ ] Delete Files
- [ ] Improve on any suggested security features
