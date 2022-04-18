import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import IndividualCountry from './pages/IndividualCountry';
import Header from './components/Header/Header';
import './styles/css/app.css';

const App = () => {
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.add(`${currentTheme}`);
  }, [currentTheme]);

  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/countries/:name' element={<IndividualCountry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
