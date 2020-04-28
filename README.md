# Find Ur City

You can find the deployed project at [https://www.findur.city](https://www.findur.city)

## Contributors

|                                       [Alfonso Ruiz](https://github.com/alfonsoruiz)                                       |                                          [Jack Kim](https://github.com/jackskim)                                          |                                        [Logan Karnes](https://github.com/lkarnes)                                         |                                         [Zac Smith](https://github.com/mrzacsmith)                                          |
| :------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|                   [<img src="./src/assets/alfonso.png" width = "200" />](https://github.com/alfonsoruiz)                   |                     [<img src="./src/assets/jack.jpeg" width = "200" />](https://github.com/jackskim)                     |                     [<img src="./src/assets/logan.png" width = "200" />](https://github.com/lkarnes)                      |                     [<img src="./src/assets/zac.jpeg" width = "200" />](https://github.com/mrzacsmith)                      |
|                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/alfonsoruiz)                  |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jackskim)                   |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lkarnes)                    |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mrzacsmith)                   |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/mralfonsoruiz) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jackskim/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/logan-karnes) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mrzacsmith/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![Code Coverage](https://api.codeclimate.com/v1/badges/981e0174c4f6059b773c/maintainability)
![Test Coverage](https://api.codeclimate.com/v1/badges/981e0174c4f6059b773c/test_coverage)

## Project Overview

[Trello Board](https://trello.com/b/R2QOaAEe/labspt7-juxta-city-data)

[Product Canvas](https://www.notion.so/Juxta-City-Data-06550a97dd9b41f1aea4b4b6de46ecb5)

[UX Design files](https://www.figma.com/file/YS5Ykd25k90FbD7UkDq2fa/Juxta-City-Data-Ryan-and-Stephen?node-id=769%3A23)

Find Ur City provides city data about important factors in deciding where to live, such as:

- Population
- Average resident age
- Climate
- Median household income
- Cost of living
- Average Commute time
- and much more!

Find Ur City presents this important data in an intuitive and easy to understand interface.

### Key Features

- Ability to search for a city located in the US
- Customized 'Recommended Cities' list based on user's survey selections
- View detailed information about individual cities
- Ability to save your Favorite cities

## Tech Stack

### Front end built using:

#### React

Why?

- Declarative
- Component-based
- Hooks for functional components
- Popularity

#### Material UI

Why?

- Most popular framework
- Lots of resources and documentation

#### Front end deployed to Heroku

#### [Back end](https://github.com/Lambda-School-Labs/juxta-city-data-be) built using:

#### Node + Express

- Write backend code in JavaScript
- Fast, unopinionated, minimalist

#### PostgreSQL

- Data persistence on Heroku
- Powerful, open-source

# APIs

## Authentication API here

🚫Replace text below with a description of the API

Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things A little happy sunlight shining through there. Let all these little things happen. Don't fight them. Learn to use them. Even the worst thing we can do here is good.

## Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

#### React Testing Library (Jest)

Why?

- Made for React Testing
- Focus on simplicity
- Minimal configuration

# Installation Instructions

Make sure you have [PostgreSQL](https://www.postgresql.org/) and [pgAdmin4](https://www.pgadmin.org/) installed on your computer.

```sh
git clone https://github.com/Lambda-School-Labs/juxta-city-data-fe.git
cd juxta-city-data-fe
npm install
npm run start
```

## Other Scripts

    * start - runs the app in development mode
    * build - builds the app for production to the build folder
    * test - runs the test watcher in an interactive mode
    * eject - copys all config files and transitive dependencies into root
    folder
    * coverage -  generates a test coverage report

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/juxta-city-data-be/blob/master/README.md) for details on the backend of our project.
