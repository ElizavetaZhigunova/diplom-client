import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import ContentMain from './components/content-main/content-main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="wrap">
            <Routes>
              <Route path="Logo" element={"/"}/>
              <Route path="Search" element={"/"}/>
              <Route path='Login' element={ <Login/> } />
              <Route path='AddNew' element={ "/" } />
            </Routes>
        </div>
        <ContentMain/>
      </div>
    </BrowserRouter>
  );
}

export default App;
