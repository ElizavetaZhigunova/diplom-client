import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
// import ContentMain from './components/content-main/content-main';
import Home from './components/Pages/Home';
import AddNew from "./components/AddNewad/AddNew";

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
              <Route path='AddNew' element={ <AddNew /> } />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
