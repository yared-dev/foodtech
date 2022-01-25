import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../components/userSlice.js'
import loginReducer from "../components/login/loginSlice";
import registrationReducer from "../components/register/registerSlice";
import tokenReducer from "../components/home/userSlice";


export default configureStore({
	reducer:{
		user: userReducer,
		login:loginReducer,
		registration:registrationReducer,
		token:tokenReducer,
	}
}) 