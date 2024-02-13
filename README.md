# MyFit App

![MyFit App](https://github.com/Shivuu2803/myFit-App/blob/main/assets/images/myFit%20cover.png)

## Overview

MyFit is a React Native mobile application designed to help users with their fitness routines. The app provides information on various exercises targeting different body parts, allowing users to customize their workout plans.

## Features

### Welcome Screen

- The app starts with a welcoming screen featuring an animated logo.
- Rings around the logo expand gradually to create an engaging visual effect.
- After a brief delay, users are automatically navigated to the home screen.

### Login Screen

- Allows users to log in with their credentials.
- Uses Formik for form handling and validation.
- Provides a link to navigate to the signup screen for new users.

### Signup Screen

- Allows new users to sign up for the MyFit app.
- Uses Formik for form handling and validation.
- Provides a link to navigate to the login screen for existing users.

### Home Screen

- Users are greeted with a personalized message and a call to action to stay at home and work out.
- A punchline and avatar are displayed, creating a visually appealing layout.
- An image slider showcases different workout scenes to motivate users.
- Body parts list allows users to explore exercises targeting specific muscle groups.

### Exercise Screen

- Displays a list of exercises based on the selected body part.
- Each exercise card includes an image, name, and a brief description.
- Users can click on an exercise to view detailed instructions.

### Exercise Detail Screen

- Provides in-depth information about a specific exercise.
- Features the exercise name, equipment required, target muscles, and secondary muscles involved.
- Offers step-by-step instructions and images for proper execution.
- Includes an option to go back to the previous screen.


## Technologies Used

- React Native
- Expo
- React Navigation
- Axios for API requests
- React Native Responsive Screen for responsive design
- React Native Reanimated for animated transitions
- Expo Image for image handling
- React Native Vector Icons for icon integration
- React Native Virtualized View for optimized scrolling
- Formik for form handling and validation

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the Metro bundler with `npm start`.
4. Use an emulator or connect a physical device to run the app.

## Acknowledgements

- This app was developed as part of a React Native project.
- Exercise data was fetched using the ExerciseDB API.

