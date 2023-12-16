import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'
export const logincontext=createContext("initial value")   //export isliye krwa rahy taky kahin bhi use krlain login context name k function ko


//loginreducer function banaya tha humny in reducer file, wahan pe export kiya tha yaahn pe import krwa rhy for using that
import { loginreducer } from './reducer'


//cookies se token mungwayengy k yeh token main kon ha user, admin, guest, boutique
import Cookies from 'js-cookie'



//yeh ek object ha... iski value kahin bhi mangi ja skti by writing data[]
    const data={
        //yahan humny liya token by the help of cookies
        token: Cookies.get('token') || undefined,    //shru main ya to undefined hoga ya to jo cookiies se milega
       
    }


export default function LoginContextProvider({children}) {

//useReducer ek tarha se use state ka bara bhai hota ha wo humny yahan use kia ha 
//const [state, setstate/dispatch] = userReducer(function containing all cases, initial data)
    const [state,dispatch]=useReducer(loginreducer, data)



    //refresh karny per cookies ki value state.token se mil kr set hojayegi jo end per thi
    //syntax 2 cheezain hoti hain function and dependency array k kitni bar execute hoga 
    //state.token yani token jab jab change hoga yeh tab chalega
    //yeh Browser main cookies main token ki value change kr raha ha 
useEffect(()=>{
  Cookies.set('token',state.token)
},[state.token])


  return (


    //logincontext.provider likha ha basic syntax yeh ha k createcontext jis name se banaya gaya ha wo name k sath .Provider kr dety
    <logincontext.Provider value={{state,dispatch}}>
      {/* yeh children jo ha wo  */}
        {children}
    </logincontext.Provider>

    
  )
}