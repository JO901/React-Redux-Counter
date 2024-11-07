// we import our stylesheet to help with look of our page
import './App.css';

// we import our 'Count' component so that we can render it on the page
import Count from './count';

// Our 'App' component that will render on the page 
function App() {
  return (
    <div>
      <h1>A Simple Counter Using Redux State!</h1>
      <Count />
    </div>
  );
}

export default App;
