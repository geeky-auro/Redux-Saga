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


## Extra Notes
Work of Root-Reducer: If we have multiple reducer then we need to combine all of them into a single reducer and then use it in the store. 
Store: It will collect all data from the store and send it to the respective component


Redux - Architecture : View -> Action -> Reducer -> Store -> View -> ......

What is Action?
- Actions are the Plain Functions.
- Get Data from ReactJs.
- Send Data to Reducer after Process.
- Must Have type key in Return Statement.
- Much Sync type with Reducer.


*) useSelector is a hook provided by React Redux that allows functional components to extract and access data from the Redux store. It subscribes to the Redux store, and whenever the store is updated, the component re-renders to reflect the changes.

Here’s a breakdown of how to use useSelector:

Import the useSelector hook from the ‘react-redux’ library.
import {useSelector} from "react-redux";
Call useSelector within your functional component, passing in a selector function.
const counter = useSelector(state => state.counter);
The selector function defines which part of the Redux store state you want to extract and use within your component.
useSelector returns the selected data from the Redux store, which you can then use within your component.

*) useDispatch is another hook provided by React Redux, which allows functional components to dispatch actions to the Redux store. It returns a reference to the dispatch function from the Redux store, enabling components to trigger state changes.

Here’s how to use useDispatch:
Import the useDispatch hook from the ‘react-redux’ library.
import { useDispatch } from "react-redux";
Call useDispatch within your functional component to get a reference to the dispatch function.
const dispatch = useDispatch();
Use the dispatch function to dispatch actions to the Redux store, which will update the state accordingly.


Reducer:-
- Reducer handle data for store
- Update Data in store
- Rules :-
	- Need Root Reducer.
	- Reducer must return the some value.
	- The reducer must have some initial value.

Note to Call our Reducer we need to connect reducer and root reducer with the store.

Combine reducer adds namespaces to the state controlled by each reducer based on the keys of the object you pass in. When you don't use combine reducer, there won't be a namespace. So change state.rootReducer to state.