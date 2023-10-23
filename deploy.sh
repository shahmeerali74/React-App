#deploy the app

docker run -d -p 8081:3000 --name frontend_app_developer --rm react_app
