import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate,Link } from 'react-router-dom';

import Swal from 'sweetalert2'
import {authentication} from '../../firebase/firebase'
import {signInWithEmailAndPassword  } from "firebase/auth";

import {  getUserSuccess, getUserFail } from "../userSlice";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
// import img from "../../assets/bats.jpg"
import GoogleBTn from '../GoogleBtn'

function LoginForm() {

  let navigate = useNavigate();
  const dispatch=useDispatch()

  // crear estados para tener al user
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[check,setCheck]=useState(false)

  const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })

  const loader=()=>{
        return Swal.fire({
                  width:250,
                  showConfirmButton:false,
                  color: 'black',
                  background:'transparent',
                  didOpen: () => {Swal.showLoading()},
              })
  }
  const loginWithEmailAndPassword=async ()=>{
       try {
           loader()
          //consultar si existe 
          const log=await signInWithEmailAndPassword(authentication, email, password)
          // Signed in
          const user=log.user
          const{displayName,uid}=user 
          //Estto ira en el Services
           // consultar a la api para obtener el accseo a los datos del usuario login
          // const result = await fetch('http://localhost:4000/api/login',{ 
          //   method: 'POST',
          //   mode: 'cors',
          //   body: JSON.stringify({ 'email': email }),
          //   headers: { 'Content-Type': 'application/json' },
          // })             
          // const content = await result.json();
          // localStorage.setItem('token',content.token)
          localStorage.setItem('user',email)
          dispatch(loginSuccess());
          dispatch(getUserSuccess({email,displayName,uid}));
            
            await Toast.fire({
              icon: 'success',
              title: "Bienvenido"
            })
          navigate('/');    
      
        } catch (error) {
            dispatch(loginFail(error.message));
            getUserFail(error.msg)
            setEmail("")
            setPassword("")
             Toast.fire({
              icon: 'error',
              title: error.message
            })
           
        }
  }
  const handleSubmit = async e => {
        dispatch(loginPending());
       e.preventDefault();
        if (!email || !password) {
          return alert("Fill up all the form!");
        }
        // dispatch(loginPending());
        loginWithEmailAndPassword()
  }
  const rememberEmail=()=>{
       setCheck(check=>!check)
  }

  return (  
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" autoComplete="off" onSubmit={(e)=>handleSubmit(e)}>
                                                <div className="form-group">
                                                    <input 
                                                        type="email" 
                                                        className="form-control form-control-user"
                                                        placeholder="Enter Email Address..."
                                                        value={email}
                                                        onChange={(e)=>setEmail(e.target.value)}/>
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                        type="password" 
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword" 
                                                        placeholder="Password"
                                                        value={password} 
                                                        onChange={(e)=>setPassword(e.target.value)}/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input 
                                                            type="checkbox" 
                                                            className="custom-control-input" 
                                                            id="customCheck"
                                                            onClick={rememberEmail}/>
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <input type="submit" className="btn btn-primary btn-user btn-block" value="login"/>
                                                <hr/>
                                                <GoogleBTn />
                                          
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <Link className="small" to="/ForgotPass">Forgot Password?</Link>
                                            </div>
                                            <div className="text-center">
                                                {/*<Link to="/register" className="small">Create an Account!</Link>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
  );
}
export default LoginForm;



