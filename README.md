WELCOME TO THE FIRST OFFICIAL....
**FLATIRON REACT BLOOD OATH**
🔪🔪🔪🩸🩸🩸🗡🗡🗡🔪🔪🔪🩸🩸🩸🗡🗡🗡


Here's the deal:
    Our powerful leaders have so much charsima that they have attracted too many potential followers to manage. They have hired you to develop a web app for making the recruitment process easier for them. They would like to be able to browse a list of potential followers, view their details, and enlist or dismiss a follower from the Cult.

## INSTRUCTIONS

For this project, you’ll be building out a React application that displays a list of available recruits, among other features. Try your best to find the right places to insert code into the established code base.

## Setup

After cloning down the project:

1. Run `npm install` in your terminal
2. Run `npm start`: This will open both your React page on port `6002` and your backend on port `6001`.

## Endpoints

The base URL for your backend is: `http://localhost:6001/cultists`

These are the endpoints you might need:

- GET: `/cultists`
- POST: `/cultists`
- DELETE: `/cultists/:id`

## What You Already Have

`FollowersPage` is the highest component below App, and serves as the main container for all of the pieces of the page.

`Collection` and `Cult` are container components, which are children of `FollowersPage`. `Collection` is where all the potential recruits will be displayed, while `Cult` (the green portion on the top of the screen) will only display the recruits that have been selected by our fearless leader.

`FollowerCard` is a presentational component that has been provided for you that will render out information about an individual recruit. They are pre-styled, and it is your responsibility to get the data into them.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; however, if your finished product has some styling issues, don't worry too much about it.

## Core Deliverables

As a user, I should be able to:

- See profiles of all recruits rendered in `Collection`.
- Add an individual recruit to my cult by clicking on it. The selected recruit should render in the `Cult` component. The recruit can be enlisted only **once**. The recruit **does not** disappear from the `Collection`.
- Release a follower from my cult by clicking on it. The follower disappears from the `Cult` component.
<!-- - Discharge a recruit from their contract forever, by clicking the red button marked "x", which would delete the recruit both from the backend and from the `Cult` on the frontend. -->