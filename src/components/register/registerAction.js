import {
  registrationPending,
  registrationSuccess,
  registrationError,
} from "./registerSlice";


import { userRegistration } from "../../api/userApi";

export const newUserRegistration = (frmDt) => async (dispatch) => {
        
        const ok=await fetchUserToken();
        if(!ok){
          dispatch(loginFail("error"))
        }
        dispatch(loginSuccess())
}
