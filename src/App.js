import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomeComponent from './Components/Routes/Home/HomeComponent';
import AboutUsComponent from './Components/Routes/AboutUs/AboutUsComponent';
import ContactUsComponent from './Components/Routes/ContactUS/ContactUsComponent';
import ServiceComponent from './Components/Routes/Service/ServiceComponent';
import AxiosComponent from './Components/Routes/Axios/AxiosComponent';
import CalculatorComponent from './Components/Routes/Calculator/CalculatorComponent';
import PortfolioComponent from './Components/Routes/Portfolio/PortfolioComponent';
function App() {
  return (
    <Router>
      <div className='App'>
        
        <ul>
          
          <li>
            <Link to='/Home' className='link'>Home</Link>
          </li>
          
          <li>
            <Link to='/Service' className='link'>Service</Link>
          </li>
          <li>
            <Link to='/Portfolio' className='link'>Portfolio</Link>
          </li>
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Axios' className='link'>Axios</Link>
          </li>
          
        </ul>
        <Routes>
          <Route exact path='/Home' element={<HomeComponent/>}></Route>
          
          <Route exact path='/Service' element={<ServiceComponent/>}></Route>
          <Route exact path='/Portfolio' element={<PortfolioComponent/>}></Route>
          <Route exact path='/Calculator' element={<CalculatorComponent/>}></Route>
          <Route exact path='/Axios' element={<AxiosComponent/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;