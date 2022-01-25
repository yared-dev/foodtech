

export const fetchUserToken=async ()=>{
        // esto es para el useeeffect de mi privateroute
        try{
            const Token = localStorage.getItem('token')
            const result = await fetch('http://localhost:4000/api/login/renew',{ 
                method: 'GET',
                mode: 'cors',
                headers: {
                'x-token': Token
                }
            })      
            const content = await result.json();
            const {ok,token} = content
            if(!ok){
                return false
            }
            return true
            // localStorage.setItem('token',token)
        }catch(e){
            console.log(e)
            return false
        }
        
    }

export const login=async(email)=>{
     // consultar a la api para obtener el accseo a los datos del usuario login
          const result = await fetch('http://localhost:4000/api/login',{ 
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ 'email': email }),
            headers: { 'Content-Type': 'application/json' },
          })             
          const content = await result.json();
          return content.token
}
export const registerUserApiFireStore=async(data)=>{
 try{
      const result = await fetch('http://localhost:4000/api/usuarios',{ 
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
      })             
      const content = await result.json();
      localStorage.setItem('token',content.token)    
      return content.token
 }catch(e){
     console.log(e)
 }
}