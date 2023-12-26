import { Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import './App.css';
import Categorypage from './pages/Categorypage';
import Productdetails from './pages/Productdetails';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path ="/" element ={ <Categorypage />}/>
      <Route path ="/signup" element ={ <Signup />}/>
      <Route path ="/productdetails" element ={ <Productdetails />}/>
    </Routes>
  </div>
  );
}

export default App;
