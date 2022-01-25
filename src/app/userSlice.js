import {createSlice} from '@reduxjs/toolkit';


export const userSlice =createSlice({
	name:"user",
	initialState:{
		value:{email:"",password:"",loggedIn:false}
	},
	reducers:{
		login:(state,action)=>{
			state.value=action.payload
		},
		logout:(state)=>{
			state.value={email:"",password:"",loggedIn:false}
		}
	}
})



export const {login,logout}= userSlice.actions;
export default userSlice.reducer	