import './App.css';
import { Route} from 'react-router-dom';
import landingPage from './pages/landingPage';
// import homePage from './pages/homePage'


function App() {
  return (
    <div className="App">

    
      
      <Route path="/" Component={landingPage} />

    </div>
  );
}

export default App;
