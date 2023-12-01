import './App.css';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import HomePage from './pages/homePage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
