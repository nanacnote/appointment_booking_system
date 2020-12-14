# Covid 19 Appointment Booking System

This is an Express.JS App configured and setup up with Pug templating engine.

- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

---

## Demo

View Deployed Version:

[Deployed with Heroku](https://appointment-bookings.herokuapp.com/)

---

## Setup the application locally

Start a new local workspace in VScode or prefered editor.
In your terminal run the commands below line by line,

**NB** Skip the `git and cd` command if you already have this project folder and just navigate into folder as appropriate.

- git clone https://github.com/nanacnote/appointment_booking_system.git
- cd appointment_booking_system
- npm install

## Run the application locally

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

- **copy**

  This folder holds all the configuration files in JSON and txt formats to allow for easy changes to the website. Example:

  - 1. Available dates and times can be added and updated in the `calendarConfig.json`
  - 2. The title and content of the email sent to a user upon confirming a booking can be set in `emailText.json`
  - 3. News items can be added to the news page inside `newsFeed.json` under three different categories.
  - 4. All the static text on the website are set inside the `staticText.json`what this means is the web site can be easily adopted to serve as an appointment bookings system for a different service.
  - 5. Since implementing a database is outside the scope of this project, there is a `userDetails.txt`file which stores user information directly on the file system as a serialized json string.

- **pubic**

  This folder contains all the image assets, the jQuery and vanilla JavaScript for controlling the website flow and finally all the css files for styling the website.

- **routes**

  Inside this folder there is the Express routing logic logic for all accepted routes ie:

  - 1. `/api` accepting **post** request from forms.
  - 2. `/index` accepting **html** request to home page from browsers.
  - 3. `/news` accepting **html** request to news page from browsers.
  - 4. `/team` accepting **html** request to team page from browsers.

- **utils**

  The utils folder holds all the helper modules for running back tasks. These logics are abstracted from the front end to the back end for security and efficiency reasons. The modules include but not limited to reading and writing to simulated text database file, authenticating users and sending emails.

- **views**

  Since Pug templating engine is in use in this project all the render HTML is stored in the folder as `*.pug`files and served by expressJS.

  If a non existing route is called this is caught by a middleware inside `./app.js` and an `/error` html response is served with a 404 error screen.
