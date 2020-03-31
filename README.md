# Web

![Image of register](https://github.com/ggmorais/be-the-hero/blob/master/frontend/examples/register_page.png)
![Image of logon](https://github.com/ggmorais/be-the-hero/blob/master/frontend/examples/logon_page.png)
![Image of profile](https://github.com/ggmorais/be-the-hero/blob/master/frontend/examples/profile_page.png)
![Image of incident](https://github.com/ggmorais/be-the-hero/blob/master/frontend/examples/incident_page.png)

# Mobile
<img width="261" height="464" align="left" src="https://github.com/ggmorais/be-the-hero/blob/master/mobile/examples/profile_page.png" />
<img width="261" height="464" align="left" src="https://github.com/ggmorais/be-the-hero/blob/master/mobile/examples/profile2_page.png" />
<img width="261" height="464"  src="https://github.com/ggmorais/be-the-hero/blob/master/mobile/examples/details_page.png" />

# What is it
Its an project that I made for my portfolio and for learning purpose when I participated in Omnistack week from Rocketseat

# Getting it

* Requirements:
  * Node JS
  * npm or yarn
  * git

* `git clone https://github.com/ggmorais/be-the-hero`
* `cd be-the-hero`

## Backend

first `cd backend`

* Environmend configuration:
  1. edit the `.env.example` with your own settings
  2. remove the `.env.example` to `.env`
* Running:
  * `yarn && yarn dev` or `npm install && npm run dev` in the root

## Web

first `cd frontend`

* Environmend configuration:
  * navigate to `src/services/api.js` and edit the baseUrl port to your backend port (by default is 5000)
* Running:
  * `yarn && yarn start` or `npm install && npm start` in the root


## Mobile

first `cd mobile`

for that you will need an android/ios device emulator

* Environmend configuration:
  * navigate to `src/services/api.js` and edit the baseUrl port to your backend port (by default is 5000)
* Running:
  * `yarn` or `npm install` in the root
  * Android: `yarn android` or `npm run android`
  * IOS: `yarn ios` or `npm run ios`
