# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

------
### Using react router dom for navigation (Link)

------
The first thing you need to do when working with context is create an initial state. This will define the starting values for your store. We’ll make a constant called initialState, and it will include a watchList, which is an array of movies. To start, it will just be an empty array. We’ll also add a watched property, which will also be an array of movies. This sets up our initial state.

### GlobalState.jsx

const initialState = {
    watchlist: [],
    watched: [],
}

------
Next we create a context using createContext, and we’ll export it so we can use it in other parts of the app. We’ll call it GlobalContext, and we’ll pass in the initialState when creating it.To make this context available to other components, we need to create app Provider. App provider is a component that wraps other components and gives them access to the global context.
Component called GlobalProvider will take in props, and inside of it, will use the useReducer hook. This will give us access to state and dispatch. We’ll use a reducer called AppReducer, which we’ll create in a separate file. Along with the reducer, we’ll also pass the initialState to useReducer.

This setup is similar to how Redux works. We’re building a global store that holds all the app’s state. The reducer is a function that tells the store how to update the state based on certain actions. It returns the new state depending on what happens in the app.

### GlobalState.jsx

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
}

------
The reducer takes two arguments: state and action. For now, we’ll return the state by default. The idea is that when we dispatch an action (which is just an object with a type), the reducer will look at that type and decide how to update the state.

Right now, we’re only handling the default case. As we add more actions later, we’ll expand the switch statement.

### AppReducer.jsx

export default (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}