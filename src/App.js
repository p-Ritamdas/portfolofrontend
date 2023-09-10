import './App.css';
import Navbar from './templates/partials/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './templates/partials/hero';
import About from './templates/partials/About';
import Srvc from './templates/partials/Srvc';
import Map from './templates/partials/Map';
import Contactss from './templates/partials/Contactss';


<link rel="stylesheet" href="./App.css" />
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Srvc/>
        <Map/>
        <Contactss/>
    </div>
  );
}

export default App;
