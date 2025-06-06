# Welcome to Flights service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as your root directory of the downloaded folder
- Create a '.env' file in the root directory add the following environment variables
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the     following piece of json

```
{
  "development": {
    "username": "<YOUR_DB-LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute
`npx sequelize db:migrate`


## DB Design
  - Airplane Table
  - Flight table
  - Airport
  - City

  - A Flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city.
  - One airport can have many flights, but a flight belongs to one airport.


## Tables

## City -> id, name, created_at, updated_at
## Airport -> id, name, city_id, address, created_at, updated_at
   Relationship -> City has many airports and Airport belongs to a city (one to many) 

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,city_id:Integer
```
