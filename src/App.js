import './App.css';
import Exprience from './Components/Exprience/Exprience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Exprience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
