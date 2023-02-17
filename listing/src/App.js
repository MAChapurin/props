import './App.css';
import {jsonData} from './etsy.js';
import Listing from './Listing';

function App() {

  return (
    <div className="App">
      <Listing items={jsonData}/>
    </div>
  );
}

export default App;
