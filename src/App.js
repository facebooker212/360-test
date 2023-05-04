import './App.css';
import ThreeSixty from 'react-360-view';

const basePath = "https://fastly-production.24c.in/webin/360";
//const basePath = '/img/'
function App() {
  return (
    <div className="App">
      <ThreeSixty
        amount={75}
        imagePath={basePath}
        fileName="output_{index}.jpeg"
        spinReverse
      />
    </div>
  );
}

export default App;
