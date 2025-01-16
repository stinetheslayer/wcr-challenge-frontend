# WCR Challenge Front-end

A mobile application built using Material Design 3, Angular 19, Ionic, CapacitorJS, and fully Dockerized. It features a welcoming interface with interactive Spline animation and tabbed authentication flows (Sign Up / Login), leveraging Angular Material components for a seamless cross-platform experience on iOS and Android.

## Table of Contents
- [Features](#features)
- [Technologies & Dependencies](#technologies--dependencies)
- [Setup Instructions](#setup-instructions)
- [Implementation Details](#implementation-details)
- [Dependency Rationale](#dependency-rationale)
- [Simplification Techniques](#simplification-techniques)
- [Known Issues & Limitations](#known-issues--limitations)
- [Resources & Credits](#resources--credits)

## Features

### Inspired by WCR Website Design
The application draws inspiration from the established WCR Website. It adopts the color scheme and title font, Rokkitt, from Material Design 3—nearly identical to the font used on the website—to create a consistent visual identity.

### Interactive Spline Animation
An engaging 3D animation integrated on the Login & Signup page using Spline.

### Tabbed Authentication
- **Sign Up Tab:** New user registration with Google and Facebook SSO styled buttons.
- **Login Tab:** Existing user authentication with Google and Facebook SSO styled buttons.

### Swagger API Integration
Simplified integration for user authentication via provided Swagger endpoints.

### Responsive Design
Adheres to Material Design 3 guidelines for a clean, responsive UI.

### Cross-Platform Support
Ensured through Ionic and CapacitorJS for seamless performance on both iOS and Android.

### Containerization
Dockerized environment for easy deployment and consistency across different setups.

## Technologies & Dependencies

- **Angular 19:** Application framework.
- **Angular Material 18:** UI components following Material Design 3 guidelines.
- **Ionic & CapacitorJS:** Cross-platform mobile compatibility.
- **Spline:** For creating interactive 3D web animations.
- **Docker:** Containerization for deployment.
- **Swagger JSON Integration:** For simplified user authentication APIs.

## Setup Instructions

### Prerequisites
- Node.js (version 16 or above)
- Angular CLI (v18+)
- Docker
- Git

### Local Development Setup
1. **Clone the Repository:**
    ```bash
    git clone https://github.com/homayoun43salimi/welcome-page-app.git
    cd welcome-page-app
    ```

### Docker Deployment

#### Backend
1. **Build the Docker Image of Backend:**
    - Navigate to the Backend folder within the cloned repository.
    ```bash
    docker build -t wcr-challenge .
    ```
2. **Run the Image:**
    ```bash
    docker run -d -p 3030:3030 wcr-challenge
    ```

#### Frontend
1. **Build the Docker Image of Frontend:**
    - Navigate to the Frontend folder within the cloned repository.
   ```bash
   npm run build
   ```
    ```bash
    docker build -t wcr-challenge-fe .
    ```
2. **Run the Image:**
    ```bash
    docker run --name wcr-challenge-fe -p 80:80 --network bridge wcr-challenge-fe
    ```

### Usage and Docs
Find Back-end in : 
https://github.com/WECANRACE/wcr-challenge-backend


**API KEY:**
I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM

**Email:**
new_frontend_developer@wecanrace.it

**Password:**
A_TUTTO_GAS_!

### Running the App

#### Using Docker
Open [http://localhost:80](http://localhost:80) in your browser to test the app.

#### Using Angular CLI
```bash
cd your-frontend-path
ng serve
```

Then visit http://localhost:4200 to test your app

> ⚠️ **Warning:** Please ensure that the back-end docker is always online while running front-end docker


## Implementation Details

### Interactive Animation
The animation component (located in src/app/components.ts) uses Spline’s API to embed and control a 3D interactive animation on the Welcome page.

### Tabbed Authentication Section
#### Utilizing Angular Material Tabs located in src/app/login & src/app/signup, the application offers:

Two tabs: "Sign Up" and "Login".
Each tab contains a form for user input and Google/Facebook SSO styled buttons.
Calls to the Swagger API for authentication are handled by AuthService in src/app/login/login.component.ts & src/app/signup/signup.component.ts.

### Authentication Flow
The AuthService abstracts HTTP calls to the Swagger API endpoints, managing login and signup logic. This includes simplified error handling and basic form validation for a streamlined user experience.

# Dependency Rationale

### Angular & Angular Material: 
Provide a structured framework and pre-built UI components adhering to Material Design 3, reducing the need for custom UI work.
### Ionic & CapacitorJS:
Facilitate cross-platform mobile development, allowing the Angular web app to run natively on iOS and Android.
### Spline: 
Enhances the user experience with modern, interactive 3D animations without requiring heavy custom code.
### Docker: 
Ensures consistency across development, testing, and production environments, simplifying deployment.

# Simplification Techniques

#### Leveraged Angular Material components to minimize custom UI code.
#### Integrated Swagger APIs directly using Angular’s HTTP client, reducing complexity in API integration.
#### Employed Docker to encapsulate environment dependencies, eliminating local setup issues.
#### Used Ionic components and CapacitorJS to streamline mobile compatibility, avoiding the need for separate codebases.

# Known Issues & Limitations

### SSO Buttons: 
Currently non-functional stubs; they are styled to match Google and Facebook branding but do not perform actual OAuth flows.
### Swagger Integration: 
Simplified; advanced error handling, token management, and security considerations are minimal.
### Animation Performance: 
May vary across devices, particularly on older models with limited hardware capabilities.
### Notification For Successful and Unsuccessful Login, Sign-up:
Currently after a successful sign-up returns to the login page and after a successful login returns to the sign-up page.

# Resources & Credits

### WECANRACE Website
### Material Design 3 Guidelines
### Figma
### Angular Documentation
### Angular Material
### Ionic Framework
### CapacitorJS
### Spline
### Swagger API Documentation
### ChatGPT & Gemini

