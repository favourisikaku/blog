import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Services from './Components/Services';
import DataBlog from './Components/DataBlog';
import Contact from './Components/Contact';
import Home from './Components/Home';
import DataAsNewOil from './Components/DataAsNewOil';
import PowerOfDataAnalytics from './Components/PowerOfDataAnalytics';
import HelpingBusinessAchieveData from './Components/HelpingBusinessAchieveData';


const App = () => {  

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} />          
        <Route path='/About' element ={<About />} />
        <Route path='/Services' element ={<Services />} />
        <Route path='/DataBlog' element ={<DataBlog />} />
        <Route path='/Contact' element ={<Contact />} />
        <Route path='/DataAsNewOil' element ={<DataAsNewOil />} />
        <Route path='/PowerOfDataAnalytics'  element ={<PowerOfDataAnalytics />} />
        <Route path='/HelpingBusinessAchieveData'  element ={< HelpingBusinessAchieveData/>} />
      </Routes>   
    </div>
  );
}

export default App;
