import React, { useContext, useState } from 'react'


//yahan hum pury folders import krwa rahy ku k app.jsx se hi pata chalega k konsa folder chahiye
import Admin from './Admin'
import Boutique from './Boutique'
import Guest from './Guest'
import User from './User'
import { logincontext } from './GlobalContext/context'


//yeh ek object ha jismain names ko folders diye huay hain
const ComponentByRole = {
  'admin' : Admin,
  'user' : User,
  'guest': Guest,
  'Boutique': Boutique
}


//ab hum function bana rahy iska format hota ha const naamOfFunction = (parameters jo isky hoty) => {yahan jo bhi wo kr k return krta}
//yeh function parameter le raha or wo parameter bhej raha object ko phir hoga yeh k object main a jis se bhi match kr jayega a : b..... wo b return ayega 
const takeRole = (parameter) => ComponentByRole[parameter]  || ComponentByRole['guest']  //undefined values arahi hogi to or wala chal jayega

function App() {

  //ek usestate hook istemal kr rhy user ki states ko shru main khud set krdengy phir bad main usko change krwaty rahengy apny hisab se
  //syntax const[a, seta]= useState(wo value jo initially rakhni hoti ha )
//const [Role, setRole] = useState('guest')
//ab yeh role hamain khud nh dena ha yeh hamain context se chahiye jo k wo cookies se layega 


//HOW TO USE GLOBAL CONTEXT
//syntax = const {provider main jo values di thin wo} = usecontext(context jis name se banaya tha woh)
const {state, dispatch}=useContext(logincontext)
// ab humny yeh context mungwa liya 


//ek function banaya ha currentuser k naam se yeh function takeRole waly function ko value bhaje raha yani jab yeh run hoga tab takeRole bhi run hoga
//jo bhi role useState se de rahy wo pehly current user mai ja raha phir takeRoll main phir object Componentbyroll main and then wahan se a:b   b value aa rahi jo k koi capital letter se start hony wali filename ha an humny usko ek tarha se print krwana ha

const CurrentUser = takeRole(Role)




  return (
    <>
{/* hum folder name likhengy yahan toh uska matlab hoga k us folder ki index.js main jo bhi kuch ha wo ajayega */}
{/* current user yani function se jo return ayega wo yahan likha hoga between < returm of function /> and humko maloom ha k wo file name ha*/}
    <CurrentUser/>
    </>
  )
}

export default App