import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/sb-admin-2.min.css'
import 'jquery/dist/jquery.min.js'

import LoginForm from './components/login/login'
import LandingPage from './components/landingPage/LandingPage'
import {loginSuccess,loginFail} from './components/login/loginSlice.js'
import {getUserSuccess} from './components/userSlice'
import RegisterForm from './components/register/register'
import {Home} from './components/home/home'
import ProtectedRoute from './components/privateRoute/privateRoutes'
import ForgotPass from './components/ForgotPassword/Forgotpass'

import {useEffect} from 'react'
import { Route,Routes,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {authentication} from './firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";

import {fetchToDoList} from './components/home/userSlice'

function App() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    
    // const token = localStorage.getItem('token')

    onAuthStateChanged(authentication, (user) => {
      if (user) {
        // console.log(user)
        const {email,displayName,uid,photoURL}=user
        dispatch(dispatch(loginSuccess()));
        dispatch(getUserSuccess({email,displayName,uid,photoURL}))
        navigate('/')
      } else {
        dispatch(dispatch(loginFail()));
      }
    });
    // dispatch(fetchToDoList())
  }, [ dispatch,navigate]);

  return (
    <div className="App">
          <Routes >
            <Route exact path='/login' element={<LoginForm/>}/>
            <Route exact path='/landingPage' element={<LandingPage/>}/>
            <Route exact path='/register' element={<RegisterForm/>}/>
            <Route exact path='/ForgotPass' element={<ForgotPass/>}/>  
            <Route exact path='/' element={<ProtectedRoute/>}>
              <Route exact path='/' element={<Home/>}/>  
            </Route>
          </Routes>
    </div>
  );
}

export default App;
