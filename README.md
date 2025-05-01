# welcome to Flights service

## Project Setup

- clone the project on your local
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

