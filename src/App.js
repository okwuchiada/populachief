
import './App.css';
import { Resume, Home, Portfolio } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='relative bg-ogpBlue text-white py-4 h-auto lg:px-10 px-4 lg:overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index path='home' element={<Home />} />
          <Route path='work' element={<Portfolio />} />
          <Route path='resume' element={<Resume />} />
        </Routes>


      </Router>
    </div>

  );
}

export default App;
