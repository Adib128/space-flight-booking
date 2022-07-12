
# GraphQL service for space flight booking

## Installation

### Installation with docker

```bash
# Change directory
$ cd space-flight-booking
# Rename the .env example file
$ mv .env.example .env
# Runing the docker container
$ docker-compose up

```

### Installation without docker

```bash
# Change directory
$ cd space-flight-booking
# Rename the .env example file
$ mv .env.example .env
# Install NPM dependencies
$ npm install
# Create database tables
$ npm run migrate
# Seed database with planets and spaceCenters
$ npm run seed
# Start the project
$ npm start
```

## Testing

```bash
$ npm run test
```

## Security
All the queries and the mutations are protected. They are accessed by sending the authorization key.

```JSON
{
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
}
```







