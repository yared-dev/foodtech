import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {

  const validarToken= async (token)=>{
    // consultar api token  http://localhost:4000/api/renew
    const result = await fetch('http://localhost:4000/api/login/renew',{ 
       method: 'get', 
       headers: new Headers({
         'x-token': token, 
       }), 
     })

    console.log(result)

    if(result){
      return true
    }
    return false
  }

  try {
    dispatch(getUserPending());

    const token= localStorage.getItem("token");

    const result= await validarToken(token);

    console.log(result)

    if (result.user && result.user._id)
      return dispatch(getUserSuccess(result.user));

    dispatch(getUserFail("User is not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};