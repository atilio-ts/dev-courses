To make this work run the following commands

Create a docker network for the application

    docker network create goals

To create the mongo container

    docker run --name mongodb -v data:/data/db --network goals-net -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo

To create the backend image

    cd backend
    docker build -t goals-node .

To create the frontend image

    cd frontend
    docker build -t goals-app .

To run the backend container

    docker run --name goals-backend --rm -d -p 80:80
    --network goals-net
    -v C:/Users/AJVG/Desktop/multi-01-starting-setup/backend:/app
    -v logs:/app/logs
    -v /app/node_modules
    -e MONGO_DB_USERNAME=admin
    -e MONGO_DB_PASSWORD=admin
    goals-node

To run the frontend container

    docker run --name goals-frontend -rm -it -p 3000:3000 --network goals-net
    -v C:\Users\AJVG\Desktop\multi-01-starting-setup\frontend\src:/app/src
    goals-app

