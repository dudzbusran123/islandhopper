import './App.css';
import { Routes, Route } from 'react-router-dom';
// import {NoMatch} from 'react-router-dom';


import WSPGallery from './Components/WSPGallery';
import IslandPage from './Components/Pages/IslandPages';
import MainPage from './Components/Pages/MainPage';
import ContactUs from './Components/Pages/ContactUs';
import AboutUs from './Components/Pages/AboutUs';
import MainBody from './Components/MainBody';
import AstoriaPawalan from './Components/Pages/AstoriaPawalan';
import Potipot from './Components/Pages/Potipot';
import HundredIsland from './Components/Pages/HundredIsland';
import PearlResort from './Components/Pages/PearlResort';
import Siargao from './Components/Pages/Siargao';
import FormHtml from './Components/FormHtml';
import Paywall from './Components/Pages/paywall';
import Logonav from './Components/logonav';
import FormDataContext from './Components/FormDataContext';






function App() {

  return (
    <div>
      {/* <IslandPage></IslandPage> */}
      {/* //"homepage": "http://dudzbusran123.github.io/islandhopper", */}
    {/* <FormDataContext.Provider> */}
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='contact' element={<ContactUs></ContactUs>}/>
      <Route path='about' element ={<AboutUs></AboutUs>}/>
      <Route path='palawan' element ={<AstoriaPawalan></AstoriaPawalan>}/>
      <Route path='potipot' element={<Potipot></Potipot>}/>
      <Route path='hundred' element={<HundredIsland></HundredIsland>}/>
      <Route path='pearl' element={<PearlResort></PearlResort>}/>
      <Route path='siargao' element={<Siargao></Siargao>}/>
      <Route path='booking' element={<FormHtml></FormHtml>}/>
      <Route path='paywaller' element={<Paywall></Paywall>}/>
      {/* <Route path='*' element={<NoMatch></NoMatch>}/> */}
    </Routes>
    {/* </FormDataContext.Provider> */}
    
    


    </div>
  );
}

export default App;
