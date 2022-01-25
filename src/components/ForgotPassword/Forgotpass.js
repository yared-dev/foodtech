import {useState} from 'react'
import {authentication} from '../../firebase/firebase'
import Swal from 'sweetalert2'
import { sendPasswordResetEmail } from "firebase/auth";



const ForgotPass=()=>{	
	const [email,setEmail]=useState("")
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

	const handleSubmit = async e => {
		e.preventDefault();
		if (!email) {
			return  await Toast.fire({
              icon: 'error',
              title: "No puede estar vacio"
            });
		}
		sendPasswordReset()
	}
	const sendPasswordReset=()=>{
		sendPasswordResetEmail(authentication, email)
		  .then(() => {
		    // Password reset email sent!
		     Toast.fire({
              icon: 'success',
              title: "Revisa tu Correo"
            });
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		     Toast.fire({
              icon: 'error',
              title: 'Usuario no encontrado '+errorCode,
            });
		  });
	}

	return(
			<div className="container">
		        <div className="row justify-content-center">

		            <div className="col-xl-10 col-lg-12 col-md-9">

		                <div className="card o-hidden border-0 shadow-lg my-5">
		                    <div className="card-body p-0">
		                        <div className="row">
		                            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
		                            <div className="col-lg-6">
		                                <div className="p-5">
		                                    <div className="text-center">
		                                        <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
		                                        <p className="mb-4">We get it, stuff happens. Just enter your email address below
		                                            and we'll send you a link to reset your password!</p>
		                                    </div>
		                                    <form  onSubmit={(e)=>handleSubmit(e)}>
		                                        <div className="form-group">
		                                            <input 
		                                            	type="email" 
		                                            	className="form-control form-control-user"
		                                                id="exampleInputEmail" 
		                                                aria-describedby="emailHelp"
		                                                placeholder="Enter Email Address..."
		                                                onChange={(e)=>setEmail(e.target.value)}/>
		                                        </div>
		                                        <button 
		                                        	type="submit"
		                                        	className="btn btn-primary btn-user btn-block"
		                                        	>
		                                            Reset Password
		                                        </button>
		                                    </form>
		                                    <hr/>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		            </div>
		        </div>
		    </div>
    )
}
export default ForgotPass;