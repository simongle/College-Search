# College Cost Calculator

This is an interactive tool to explore the tuition costs of colleges and to better undertstand how much of tuition money is actually spent on education. It was built for [The Century Foundation](https://tcf.org)

It can be seen live in action here: [How For Does Your Tuition Dollar Go?](https://tcf.org/content/commentary/how-far-does-your-tuition-dollar-go/)

## Development

Under the hood, it uses React Autosuggest, allowing the user to fuzzy-match names of schools against a medium-sized dataset of colleges with very low-latency.
The data is fetched from a cloudfront-hosted JSON file. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

To update, upload the build artifacts to the relevant s3 bucket hosting the app.
