import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Consulter from './components/Recruteur/Offres/Gerer';
import SideBar from './components/Recruteur/SideBar/SideBar';
import Sidebar from './components/Candidat/SideBar/Sidebar';
import Créer from './components/Recruteur/Offres/Créer';
import CréerEvent from './components/Recruteur/événements/CréerEvent';
import Jobs from './components/List-jobs/Jobs';
import Quiz from './components/Candidat/Test Candidats/Quiz';
import HomeQuiz from './components/Candidat/Test Candidats/HomeQuiz';
import Test from './components/Recruteur/Test Recruteurs/Test';
// import ListEvent from "./components/événements/ListEvent";
import Participer from './components/Recruteur/événements/Participer';
import ConsulterTest from './components/Recruteur/Test Recruteurs/ConsulterTest';
import Home from './components/Recruteur/Test Recruteurs/Home';
import CV from './components/CV/CV';
import Signin from './components/Authentification/Signin';
import RegisterRecruteur from './components/Authentification/RegisterRecruteur';
import RegisterCandidat from './components/Authentification/RegisterCandidat';
import Reset from './components/Authentification/ResetPassword';
import ForgotPassword from './components/Authentification/ForgotPassword';
import UpdateCandidat from './components/Authentification/UpdateCandidat';
import UpdateRecruteur from './components/Authentification/UpdateRecruteur';
import Gerer from './components/Recruteur/Offres/Gerer';
import HomeRecruteur from './components/Home/HomeRecruteur';
import List from './components/List';
import Meet from './components/Meet';
import Details from './components/Details';
import HomeCandidat from './components/Home/HomeCandidat';
const Auth = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Signin />} />
                <Route path='/login' element={<Signin />} />
                <Route path='/register-recruteur' element={<RegisterRecruteur />} />
                <Route path='/register-candidat' element={<RegisterCandidat />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/reset' element={<Reset />} />
                <Route path='/recruteur' element={<SideBar />} />
                <Route path='/creer-offres' element={<Créer />} />
                <Route path='/consulter' element={<Gerer />} />
                <Route path='/creer-evenements' element={<CréerEvent />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/test' element={<HomeQuiz />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/creer-test' element={<Home />} />
                <Route path='/participer' element={<Participer />} />
                <Route path='/consulter-test' element={<ConsulterTest />} />
                <Route path='/test-recruteur' element={<Test />} />
                <Route path='/candidat-profile' element={<UpdateCandidat />} />
                <Route path='/recruteur-profile' element={<UpdateRecruteur />} />
                <Route path='/cv' element={<CV />} />
                <Route path='/candidat' element={<Sidebar />} />
                <Route path='/home-recruteur' element={<HomeRecruteur />} />
                <Route path='/home-candidat' element={<HomeCandidat />} />
                <Route path='/users' element={<List />} />
                <Route path='/meet' element={<Meet />} />
                <Route path='/details' element={<Details />} />
            </Routes>
        </Router>
    );
};

export default Auth;
