import './App.css';
import Exprience from './Components/Exprience/Exprience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Exprience />
      <Works />
    </div>
  );
}

export default App;
