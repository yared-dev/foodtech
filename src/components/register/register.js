 import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { useNavigate,Link } from 'react-router-dom';

import {registrationSuccess} from "./registerSlice";
import Swal from 'sweetalert2'


import {authentication} from '../../firebase/firebase'
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import GoogleBtn from '../GoogleBtn'
function RegisterForm() {

  let navigate = useNavigate();
  const dispatch=useDispatch()

  // crear estados para tener al user
  const initialState = {
      name: "Jose galindo",
      phone: 922589931,
      email: "yared@gmail.com",
      company: "galactus",
      address: "mzAlt 13",
      password: "",
      confirmPass: "",
      uid:""
    };    
  const passVerificationError = {
        isLenthy: false,
        hasUpper: false,
        hasLower: false,
        hasNumber: false,
        confirmPass: false,
  };
  const [passwordError, setPasswordError] = useState(passVerificationError);
  const [user,setUser]=useState(initialState)

  const loader=()=>{
        return Swal.fire({
              width:250,
              showConfirmButton:false,
              color: 'black',
              background:'transparent',
              didOpen: () => {Swal.showLoading()},
          })
     }
  const registerUserApiFireStore=async(data)=>{
     try{
          const result = await fetch('http://localhost:4000/api/usuarios',{ 
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
          })             
          const content = await result.json();
           Swal.fire({
              title: 'Registrado!',
              text: "Usuario registrado",
              showConfirmButton:false,
              timer:1500,
              timerProgressBar: true,
              icon: 'success',
            })
          console.log(content)
          localStorage.setItem('token',content.token)    
          navigate('/login');  
     }catch(e){
        Swal.fire({
              title: 'Error!',
              text: e,
              icon: 'error',
              showConfirmButton:false,
              toast:true,
              timer:1500,
              timerProgressBar: true,
            })
     }
  }
  const registerUserAndValidate=async (_email,_password)=>{
     try{
          const createUser = await createUserWithEmailAndPassword(authentication, _email, _password)
          const user = createUser.user;
          return user.uid
        }catch(error){
                 const newError=error.message.slice(9)
                 Swal.fire({
                  title: 'Error!',
                  text: newError,
                  icon: 'error',
                  showConfirmButton:false,
                  toast:true,
                  timer:2500,
                  timerProgressBar: true,
                })

        }
  }
  const handleOnSubmit =async (e) => {
        e.preventDefault();
        const { name, phone, email, company, address, password } = user;
         if(!passwordError.confirmPass){
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-right',
                  iconColor: 'eed',
                  customClass: {
                    popup: 'colored-toast'
                  },
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
                })
                await Toast.fire({
                  icon: 'error',
                  title: "La contraseña no coincide"
                })
                return;
         }
         loader()
         const uid =await registerUserAndValidate(email,password)
         if(!uid){
            return;
         }
        updateProfile(authentication.currentUser, {
          displayName: user.name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
          phoneNumber:user.phone,
        }).then(() => {
        }).catch((error) => {
          // An error occurred
        });
        const newRegistration = {
          name,
          phone,
          email,
          company,
          address,
          password,
          uid
        };

        registerUserApiFireStore(newRegistration)
        // dispatch(registrationSuccess("Usuario registrado"))
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
            await Toast.fire({
              icon: 'success',
              title: "Bienvenido"
            })
  };
  const handleOnChange = async(e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (name === "password") {

          const isLenthy = value.length > 8;
          const hasUpper = /[A-Z]/.test(value);
          const hasLower = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          setPasswordError({
            ...passwordError,
            isLenthy,
            hasUpper,
            hasLower,
            hasNumber,
          });

        }

        if (name === "confirmPass") {

          setPasswordError({
            ...passwordError,
            confirmPass: user.password === value,
          });    
        }
  };
  return (  
        <div className="w-full card o-hidden border-0 shadow-lg " style={{margin:"auto!important"}}>

            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Crea tu Cuenta!</h1>
                            </div>
                            <form className="user" autoComplete="off" onSubmit={(e)=>handleOnSubmit(e)}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name" value={user.name} onChange={handleOnChange} 
                                      name="name" />
                                    </div>

                                    <div className="col-sm-6">
                                        <input 
                                          className="form-control form-control-user" 
                                          placeholder="Last Name"  
                                          value={user.phone} 
                                          onChange={handleOnChange} 
                                          name="phone" 
                                          type="number" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input 
                                          type="text" 
                                          className="form-control form-control-user" 
                                          placeholder="Company" 
                                          name="company" 
                                          value={user.company} 
                                          onChange={handleOnChange} />
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <input 
                                          className="form-control form-control-user" 
                                          placeholder="Last Name"  
                                          name="address" 
                                          value={user.address} 
                                          onChange={handleOnChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" name="email" value={user.email} onChange={handleOnChange} />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" value={user.password} name="password" onChange={handleOnChange}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password" name="confirmPass" value={user.confirmPass} onChange={handleOnChange}/>
                                    </div>
                                </div>
                                    <div style={{width:"10rem"}}>
                                   {
                                       !passwordError.isLenthy ? 
                                       <div className="text-danger">Minimo 8 caracteres
                                        </div> : ""
                                    }
                                    {
                                       !passwordError.hasUpper ? 
                                       <div className="text-danger"> 
                                           Minimo 1 mayuscula
                                        </div> : ""
                                    }
                                    {
                                       !passwordError.hasLower ? 
                                       <div className="text-danger"> 
                                           Minimo 1 minuscula
                                        </div> : ""
                                    }
                                    {
                                       !passwordError.hasNumber ? 
                                       <div className="text-danger"> 
                                           Minimo 1 nummero
                                        </div> : ""
                                    }
                                    </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Registrar Cuenta
                                </button>
                                <hr/>
                                <GoogleBtn/>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="/">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <Link to="/login" className="small">Already have an account? Login!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
  
export default RegisterForm;