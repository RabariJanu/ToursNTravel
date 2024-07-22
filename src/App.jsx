import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { About } from './pages/About';
import Packages from './pages/Packages';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/packages' element={<Packages/>}/>
        <Route exact path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
