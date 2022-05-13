import Loader from "./layout/Loader";
import {Routes,Route} from 'react-router'
import Home from './components/Home'
function App() {
  return (
   <div>
     <h1>Hello world!!!!</h1>
     {/* <Loader/> */}
     <Routes>
      <Route path="/" element ={<Home/>}/>
     </Routes>
   </div>
  );
}

export default App;
