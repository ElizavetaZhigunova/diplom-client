import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
// import ContentMain from './components/content-main/content-main';
import Home from './components/Pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="wrap">
            <Routes>
              <Route path="Logo" element={"/"}/>
              <Route path="/" element={<Home/>}/>
              <Route path="Search" element={"/"}/>
              <Route path='Login' element={ <Login/> } />
              <Route path='AddNew' element={ "/" } />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
