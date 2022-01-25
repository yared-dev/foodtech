import React,{useState} from 'react';
import './landing.css'

import Swal from 'sweetalert2'

function LandingPage() {

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


  return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <div class="w-100 d-flex justify-content-between" >
                <div  class=" p-2">
                  <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <svg 
                            class= "me-md-3"
                            preserveAspectRatio="xMidYMid meet" 
                            data-bbox="6.771 6 186.459 187.999" 
                            viewBox="6.771 6 186.459 187.999" 
                            height="30" 
                            width="30" 
                            xmlns="http://www.w3.org/2000/svg" 
                            data-type="color" 
                            role="presentation" 
                            aria-hidden="true">
                            <g>
                                <path d="M192.26 71.766l-21.688-37.565a7.23 7.23 0 0 0-9.878-2.646L139.77 43.637c-4.821 2.783-10.846-.695-10.846-6.262V13.231A7.231 7.231 0 0 0 121.693 6H78.309a7.231 7.231 0 0 0-7.231 7.231v24.145c0 5.566-6.026 9.045-10.846 6.262L39.306 31.554a7.232 7.232 0 0 0-9.878 2.646L7.74 71.766a7.23 7.23 0 0 0 2.646 9.877l20.937 12.089c4.82 2.783 4.82 9.74 0 12.524l-20.937 12.089a7.23 7.23 0 0 0-2.646 9.877l21.689 37.565a7.23 7.23 0 0 0 9.878 2.646l20.925-12.083c4.821-2.783 10.846.695 10.846 6.262v24.156a7.231 7.231 0 0 0 7.231 7.231h43.385a7.231 7.231 0 0 0 7.231-7.231v-24.155c0-5.566 6.026-9.045 10.846-6.262l20.924 12.082a7.232 7.232 0 0 0 9.878-2.646l21.688-37.565a7.23 7.23 0 0 0-2.646-9.877l-20.937-12.089c-4.82-2.783-4.82-9.741 0-12.524l20.937-12.089a7.23 7.23 0 0 0 2.645-9.877z" fill="#2751A3" data-color="1"></path>
                                <path d="M126.195 89.041l-15.212-.006V73.799a10.97 10.97 0 0 0-3.213-7.74v-.001c-6.908-6.908-18.719-2.022-18.728 7.746l-.006 15.221-6.62-.003v-.006H73.8a10.975 10.975 0 0 0-7.74 3.213c-6.908 6.908-2.022 18.719 7.746 18.727l2.708.017v.006h12.513l-.003 6.602h-.006v8.616a10.973 10.973 0 0 0 3.213 7.74c6.908 6.908 18.719 2.022 18.728-7.746l.017-2.708h.006v-12.505H126.2a10.97 10.97 0 0 0 7.74-3.213h.001c6.908-6.904 2.022-18.715-7.746-18.724z" fill="#FFFFFF" data-color="2"></path>
                            </g>
                        </svg>
                        Foodtech
                  </a>
                </div>
                <div class="p-2">
                    <ul class="navbar-nav mx-4 mb-2 mb-lg-0 ">
                        <li class="nav-item">
                          <a class="nav-link" href="#">Inicio</a>
                        </li> 
                        <li class="nav-item">
                          <a class="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Que Ofrecemos?</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Forum</a>
                        </li>
                    </ul>
                </div>
                <div class="p-2">
                    <h2>Login</h2>
                </div>  
            </div>
          </div>
        </nav>
  );
}
export default LandingPage;



