import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterUser from './pages/registerUser'
import RegisterTherapist from './pages/registerTherapist'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<RegisterTherapist />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
