// we import 'createRoot' to bind our react components into our html file and render it on the page
import { createRoot } from 'react-dom/client';
/* we import the 'Provider' to wrap around our whole app and pass our store(that has all our data) 
as a prop to be used anywhere in the react app and avoid prop drilling */
import { Provider } from 'react-redux';
// we import the top level component 'App' so that it and its children components can render on the page
import App from './App.jsx';
// we import the store so that we can pass it as a prop and have access to our state data
import store from './store.js';

// 'createRoot' is a build-in-functon that takes in a html element to be the base of our react app
let root = createRoot(document.getElementById('root'))

// we render our components inside that element
root.render(
    // the provider component that is used to pass the store to the rest of the app
    <Provider store={store}>
        {/* Our applicaton that will show a title and have a clickable counter  */}
      <App />
    </Provider>
);
