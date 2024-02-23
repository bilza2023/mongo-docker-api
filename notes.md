POSTGRES_PASSWORD
POSTGRES_USER
POSTGRES_DB

sudo docker build -t taleemhelp/api .

//--in build it will be tagged automatically as :latest. if not use
sudo docker push taleemhelp/api:latest
//to push 
sudo docker push taleemhelp/api:latest

//--running   locally when not using compose
sudo docker run --name pg -e POSTGRES_PASSWORD=32611 -e POSTGRES_USER=bilal -e POSTGRES_DB=taleeb_db -p 5432:5432 -d postgres
