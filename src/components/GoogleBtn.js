import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFail } from "./login/loginSlice";
import { getUserSuccess } from "./userSlice";

const GoogleBtn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const singGoogle = async () => {
    try {
      // logeaste con google
      const provider = new GoogleAuthProvider();

      const popUp = await signInWithPopup(authentication, provider);
      GoogleAuthProvider.credentialFromResult(popUp);

      // let token = credential.accessToken;
      let user = popUp.user;
      let { email, displayName, uid, photoURL } = user;
      dispatch(getUserSuccess({ email, displayName, uid, photoURL }));
      //este token enviar al backend para verificar si esta registrado si no crear uno nuevo user
      // const result = await fetch('http://localhost:4000/api/login/google',{
      //    method: 'POST',
      //    mode: 'cors',
      //    body: JSON.stringify({ 'uid':uid}),
      //    headers: { 'Content-Type': 'application/json' },
      //  })
      // const content = await result.json();
      // console.log(content)
      // localStorage.setItem('token',content.token)
      localStorage.setItem("user", email);
      // dispatch(loginSuccess());
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(errorCode);
      console.error(errorMessage);
      console.error(email);
      console.error(credential);
      dispatch(loginFail(error.message));
    }
  };
  return (
    <div onClick={singGoogle} className="btn btn-google btn-user btn-block">
      <i className="fab fa-google fa-fw"></i> Login with Google
    </div>
  );
};
export default GoogleBtn;
