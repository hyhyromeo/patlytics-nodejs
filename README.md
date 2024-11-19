## Node.js Backend Application

This is a Node.js backend application that has been Dockerized for easy deployment. The app includes routes and controllers to handle API requests and uses environment variables for secure configuration.

Features

- RESTful API using Express.js.
- Dockerized for consistent and isolated deployment.
- Supports environment variables for secure configuration.

# Installation

## Local Development

1.  Clone this repository:
    ```
    git clone https://github.com/hyhyromeo/patlytics-nodejs.git
    cd your-repo
    ```
2.  Install dependencies:
    ```
    npm install
    ```
3.  Create a .env file in the root directory:
    ```
    API_KEY=your_api_key
    ```
4.  Start the server:
    ```
    npm start
    ```
5.  Access the API at http://localhost:5000.

## Dockerized Setup

1. Build the Docker image:
   ```
    docker build -t node-backend .
   ```
2. Run the Docker container:
   ```
    docker run -p 5000:5000 --env-file .env node-backend
   ```

Environment Variables

The application uses the following environment variables:

- API_KEY - Example API key for requests
