import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Registration from './components/registration/registration';
import Login from './components/authorization/login';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home';
import Userpage from './components/Userpage/userpage';

function App() {
  const isAuth = useSelector(state => state.user.isAuth) //it's not necessary, because we haven't the url for token check-in

  // In best practice, we must check token (request to the server),
  // but api hasn't the necessary url. Then I use localStorage for rendering our pages
  const token = localStorage.getItem("token")
  console.log("token: ", token)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {!token ?
          <Routes>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        : 
        <Routes>
            <Route path='/' index element={<Home />}/>
            <Route path='/users/:userId' element={<Userpage/>}/>           
            {/* <Route path="/*" element={<div>Not found</div>} />    */}
            <Route path="/*" element={<Navigate replace to="/" />} />         
          </Routes>
        }
        
      </div>
    </BrowserRouter>
  );
}

export default App;
