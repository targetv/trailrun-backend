# Please begin these steps after setting up the front end.

### `Steps To Run This Project`

## `Step 1`

Go to the root of the project folder and run the following command `npm i` this will install all the node modules required.

## `Step 2`

Create a .env file that contains the following in the root of the project:

NODE_ENV="development"
PORT=3030

DATABASE_URL="DATABASE URL HERE POSTGRES"
SHADOW_DATABASE_URL="SHADOW DATABASE URL HERE POSTGRES"

SECRET_KEY="YOUR OWN SECRET KEY HERE"

JWT="YOUR OWN JSON WEB TOKEN KEY HERE "

PAYPAL_CLIENT_ID="YOUR PAYPAL CLIENT ID KEY HERE"
PAYPAL_CLIENT_SECRET="YOUR OWN PAYPAL CLIENT SECRET KEY HERE"

## `Step 3`

Run `npx prisma migrate dev --name init`
Run `npm i @prisma/client`

## `Step 4`

To create a admin, run the following command `npx prisma studio`.

### `npm start`

Will run the server on [http://localhost:3030]
