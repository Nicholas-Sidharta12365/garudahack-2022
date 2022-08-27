import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterUser from './pages/registerUser';
import RegisterTherapist from './pages/registerTherapist';
import Questionaire from './pages/questionnaire';
import Landing from './pages/landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Logout from './pages/Logout';
//import Mainvideo from './components/main';

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
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/logout' element={<Logout />}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
