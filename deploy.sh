#deploy the app

docker run -d -p 5432:3000 --name frontend_app --rm react_app
