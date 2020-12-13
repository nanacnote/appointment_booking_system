# Covid 19 Appointment Booking System

This is a Express.JS App configured and setup up with Pug templating engine.

- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

---

## Demo

View Deployed Version:

[Deployed with Heroku](https://appointment-bookings.herokuapp.com/)

---

## Setup the application

Start a new local workspace in VScode or prefered editor.
In your terminal run the commands below line by line,

- git clone https://github.com/nanacnote/appointment_booking_system.git
- cd appointment_booking_system
- npm install

## Run the application

While inside the `appointment_booking_system` directory run the following command:

- npm start
- now from your local browser navigate to http://localhost:3000/

---

## Architecture

```
+-- copy
    |
    | +-- calendarConfig.json
    |
    | +-- emailText.json
    |
    | +-- newsFeed.json
    |
    | +-- staticText.json
    |
    | +-- userDetails.json


+-- public
    |
    | +-- images
    |
    | +-- javascript
            |
            | +-- home.js
    |
    | +-- stylesheets
            |
            | +-- styles.css


+-- routes
    |
    | +-- api.js
    |
    | +-- index.js
    |
    | +-- news.js
    |
    | +-- teams.js

+-- utils
    |
    | +-- readFromFile.js
    |
    | +-- sendEmail.js
    |
    | +-- userAuth.js
    |
    | +-- writeToFile.js

+-- views
    |
    | +-- error.pug
    |
    | +-- index.pug
    |
    | +-- layout.pug
    |
    | +-- news.pug
    |
    | +-- team.pug
```

---
