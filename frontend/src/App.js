import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/registerUser';
import RegisterTherapist from './pages/registerTherapist';
import Questionaire from './pages/questionnaire';
import Landing from './pages/landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Logout from './pages/Logout';
import HomeTherapist from './pages/HomeTherapist';
import Mainvideo from './components/videocomp/Main';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/questionnaire' element={<Questionaire />} />
        <Route path='/login' element={<RegisterUser />} />
        <Route path='/join' element={<RegisterTherapist />} />
        <Route path='/home' element={<Home />} />
        <Route path='/therapist' element={<HomeTherapist />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/mainvideo' element={<Mainvideo />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
