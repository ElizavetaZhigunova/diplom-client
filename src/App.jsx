import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
// import ContentMain from './components/content-main/content-main';
import Home from './components/Pages/Home';
import AddNew from "./components/AddNewad/AddNew";
import { AllAds } from './components/Pages/AllAds';
import { FullAd } from './components/Pages/FullAd';
import FourtTab from './components/AddNewad/FourtTab';
import UserProfile from './components/Pages/UserProfile';



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
              <Route path='AllAds' element={<AllAds />} />
              <Route path='AllAds/:id' element={<FullAd />} />
              <Route path='uploadAdd' element={<FourtTab />} />
              <Route path='profile' element={<UserProfile />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
