import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
    </Routes>
    </div>
    
      
    <ToastContainer theme='dark'/>
    
    </BrowserRouter> 
  );
}

export default App;
