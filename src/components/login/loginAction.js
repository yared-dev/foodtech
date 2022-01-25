import {
  loginSuccess,
  loginFail,
} from "./loginSlice";
import { useSelector} from "react-redux";


import { fetchUserToken } from "../../services/isAuth";

export const fetchUser = () => async (dispatch) => {
        
        const ok=await fetchUserToken();
        if(!ok){
          dispatch(loginFail("error"))
        }
        dispatch(loginSuccess())
}
