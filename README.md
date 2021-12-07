# plugin-show-attributes 

This is a simple Twilio Flex Plugin that demonstrates how to lookup a customer record from an API and present that information in a customer React component.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

## Dependencies
This code assumes that the incoming Task from TaskRouter has an attribute named `id`. It then uses that value to do a customer lookup with some API. The URL for that API is configured in a "React environment variable" called REACT_APP_CUSTOMER_ENDPOINT. The code assumes that the endpoint allows the `id` to be supplied as the tail of the URL path. See `CustomerInfoState.js` for an example of usage. You may need to modify this depending on the needs of your own endpoint.

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:8080`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3000 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

Use standard Flex plugin deployment techniques as documented [`here`](https://www.twilio.com/docs/flex/developer/plugins/cli/deploy-and-release).