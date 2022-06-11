# **Ecommerce-Website**

## Description:

An ecommerce store built with MERN stack, and utilizes third party API's. This ecommerce store enable three main different flows or implementations:

1.  Buyers browse the store categories, products and brands.
2.  Sellers or Merchants manage their own brand component.
3.  Admins manage and control the entire store components.

## Features:

- Node provides the backend environment for this application.
- Express middleware is used to handle requests, routes.
- Mongoose schemas to model the application data.
- React for displaying UI components.
- Redux to manage application's state.
- Redux Thunk middleware to handle asynchronous redux actions.

## Run Locally:

1\. Clone repo

2\. Setup MongoDB

3\. Run Backend

`$ npm install`

`$ npm start`

4\. Run Frontend

Open New Terminal

`$ cd frontend`

`$ npm install`

`$ npm start`

## Env Variables:

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

### Essential Variables:

PORT=

DB_URI =

STRIPE\_API\_KEY=

STRIPE\_SECRET\_KEY=

JWT_SECRET=

JWT_EXPIRE=

COOKIE_EXPIRE=

SMPT_SERVICE =

SMPT_MAIL=

SMPT_PASSWORD=

SMPT_HOST=

SMPT_PORT=

CLOUDINARY_NAME=

CLOUDINARY\_API\_KEY=

CLOUDINARY\_API\_SECRET=

*fill each filed with your info respectively*
