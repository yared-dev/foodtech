import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../service/isAuth";

export const renewToken = () => async (dispatch) => {
    try{
        dispatch(getUserPending());
        const token = localStorage.getItem("token");
        const result = await fetch('http://localhost:4000/api/login/renew',{ 
                method: 'GET',
                mode: 'cors',
                headers: { 'token': token },
              })             
        const content = await result.json();
        console.log(content)
      }catch(e){
          console.error(e)
      }
};