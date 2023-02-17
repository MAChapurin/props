import "./App.css";
import Stars from "./Stars";

function App() {
  return (
    <div className="App">
      <Stars count={0} />
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
      <Stars count={6} />
      <Stars count={'string'} />
    </div>
  );
}

export default App;
