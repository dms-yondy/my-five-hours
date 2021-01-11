# Design Document for My Five Hours App
The five hour rule is an idea that you should spend one hour a day five times a week to deliberate practice or learning. You can read more about the five hour rule [here](https://www.tameday.com/the-power-of-the-five-hour-rule/).

The aim of this app is to help people keep track of what they have spent their five hours on each week. This will help people keep their five hours organized as well as help them with reflecting what they have learned.

## Tech Stack

This application will be built using the so-called "MERN" stack. MongoDB will be used to store the data, Express and Node.js will be used to build the backend, and finally React will be used to build the front-end of the application. 


## Requirements 

- [ ] A new user can create a new profile.
- [ ] An existing user can login
- [ ] Once a user has logged in they can view their dashboard
- [ ] On a dashboard a user can create a new entire for what they have learnt that day
- [ ] A user can view their past entries on the dashboard
- [ ] Create a landing page

## 23/11/20

### Goals

- [X] Research wire framing
- [X] Build wire frame for landing page


### Requirements

## 24/11/20

### Goals

- [ ] Refactor landing page to new requirements of wireframe
- [ ] Clean and refactor frontend code


## 25/11/20

### Goals

- [ ] implement user login and sign up for the backend


## 7/12/20

- [X] created new responsive navbar
- [X] created simple footer

## 8/12/20

- [X] create login page and linked it to backend
- [X] create sign up page linked it to backend


## 10/12/20

- [X] created homepage


# Road map for 2021

In the month of january I would like to complete my redesign of the my five hours app. While my first try at designing and building this app was a great learning experience, overall I was unhappy with the final project. I felt that the way I had implemented the app hadn't achieved the functionality that I wanted when I started the project.

My goal for the redesign was to turn the app into a habit builder and to also improve the UI. At the end of last year I started the redesign. I created and implemented a new UI, as well as improving the code in the backend for the login and sign up. I am a lot happier with the results so far. The second part now is to create a dashboard to help the user build the habit of studying for one hour a day five times a week.

## Goals

- [ ] figure out how to store the data for each user
- [ ] create a one hour timer for the user to use while they are studying
- [ ] design a navbar for the dashboard


## Idea for How to Model User Data

Each user will have a weeks array which is made up of `Week` objects

``` javascript
User {
    ...
    weeks [
        {...week one object},
        {...week two object},
        {...week three object}
        ...
        {...week fifty two object}
    ]
}
```

The `Week` object is made up seven day objects. The first and last weeks of the year might have less than seven objects depending on when the year starts and ends. The keys for each day object will be 0,1,2,3,4,5,6. This means that we can use the `Date` object in order to look up the current day. The week object will also have a completed boolean which is true if the user has done five hours of study that week.

``` javascript
    {
        0 : {monday day object},
        1 : {tuesday day object},
        2 : {wednesday day object},
        ...
        6 : {saturday day object},
        completed : false 
    }
```

The `Day` object will be made up of a String field which tell us what the user learnt that day and a boolean which tells us if the user studied that day.