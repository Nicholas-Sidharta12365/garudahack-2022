import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterUser from './pages/registerUser';
import RegisterTherapist from './pages/registerTherapist';
import Questionaire from './pages/questionnaire';
import Landing from './pages/landing';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/questionnaire' element={<Questionaire />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<RegisterTherapist />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
