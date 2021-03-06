
import {Routes,Route} from 'react-router'
import Home from './components/Home'
import Login from "./components/auth/Login";
import {Toaster} from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { loadUser,logout } from "./redux/actions/auth";
import { useEffect } from "react";
import Signup from "./components/auth/Signup";

// const token =localStorage.getItem('token')
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])
  return (
   <div>
     {/* <h1>Hello world!!!!</h1> */}
     {/* <Loader/> */}
     <Toaster/>
      <button onClick={e=>{
        dispatch(logout())
        window.location.reload()
      }} >Logout</button>
     <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/signup" element ={<Signup/>}/>
     </Routes>
   </div>
  );
}

export default App;
