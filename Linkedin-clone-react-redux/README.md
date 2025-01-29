
## Likedin Clone


## Table of Contents


* [Demo](#Demo)
* [Introduction](#Introduction)
* [Installation](#Installation)
* [Features](#Features)
* [Usage](#Usage)


## Demo
## Introduction

Welcome to the LinkedIn Clone project! This project is a web application built using React, Redux, and Firebase for authentication. It allows users to create accounts, log in, share posts, and interact with posts by liking them. This README file will provide you with an overview of the project, installation instructions, and key features.


## Deployment
Link https://linkedin-clone-react-redux-omega.vercel.app/

## Installation

Follow the steps below to set up the Google Clone project locally:

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Shivansh270/Linkedin-clone-react-redux.git
```
2. Navigate to the project directory:
```bash
cd linkedin-clone
````
3. Install the required dependencies using npm or yarn:
```bash
npm install
# or
yarn install
````
4. Create a Firebase project and configure it for this application. You'll need to set up Firebase Authentication and Firebase Firestore for the database. Replace the Firebase configuration in `src/firebase.js` with your own Firebase project configuration.


5. Start the development server:

```bash
npm start
# or
yarn start
```
6. Open your web browser and navigate to http://localhost:3000 to access the Google Clone application.


## Features
1. User Authentication
- Users can create accounts and log in using their email and password.
- Firebase Authentication is used to securely manage user authentication.
2. Post Sharing
- Authenticated users can create and share posts with text and optional images.
- Posts are stored in Firebase Firestore, making them persistent.
3. Like Functionality
- Users can like and unlike posts.
- The like status is stored in Firestore, and the UI reflects the current state of likes.

## Usage
1. Sign Up:

- Click the "Sign Up" button to create a new account.
- Enter your email and password.
- After signing up, you will be automatically logged in.
2. Log In:

- If you already have an account, click the "Log In" button.
- Enter your email and password to log in.
3. Create a Post:

- Once logged in, you can create a new post.
- Click the "Create Post" button.
- Enter the post text and optionally upload an image.
- Click "Post" to share your post with the community.
4. Like a Post:

- To like a post, simply click the thumb icon on the post.
- You can also unlike a post by clicking the heart icon again.



