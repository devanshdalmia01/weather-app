
# Weather API

Problem Statement - Get the weather from external API and then store in the DB.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONOGO_DB_URL = Your MongoDB Link`

`API_BASE_URL = "https://api.openweathermap.org/data/2.5/"`

`API_KEY = "89fbab33fb1f28e8680dbcaaadc05311"`

`PORT = 8080`


## API Reference

#### Get weather for PUNE

```http
  GET /api/weather
```

#### Get weather for particular city with city code

```http
  GET /api/weather?cityCode=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityCode`      | `number` | Required
    You can take the city code from the JSON provided in the repo!
