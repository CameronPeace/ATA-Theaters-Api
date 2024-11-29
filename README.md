## ATA Theaters API
A nodejs internal api for the ATA Theaters application

## Spinning Up
To setup locally please follow the steps below. You will need docker installed and running.
These steps should be followed in your desired terminal.
1. In the root of the project directory, copy the contents of the `.env.example` file and populate teh `DB_USERNAME` and `DB_PASSWORD` values with your desired local db credentials. AS well as the `jwtSecret` key with the same value as the `JWT_SECRET` key in your application .env. 
    - [Prepare the application first then return to these steps](https://github.com/CameronPeace/Ata-Theaters)
    - Your DB login credentials should match in both repositories.
2. Run `npm install` while at the root of the project directory
3. then run `docker-compose up --build -d`
    - if you notice an error being thrown dealing with npm start this is fine (I didn't figure out how to fix it)
4. Then, run `npm start` to start running the api locally. It should work this time.
5. You should be good to go.

## ATA Theaters API

This is the internal api for the main application 

[The Application repository can be found here](https://github.com/CameronPeace/Ata-Theaters)
