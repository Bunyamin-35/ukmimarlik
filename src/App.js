//import logo from './assets/logobgsuz2.png';
import './App.css';
//import { FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/hakkimizda" element={<About />}/>
      <Route path="/hizmetlerimiz" element={<Services />}/>
      <Route path="/iletisim" element={<Contact />}/>
    </Routes>
  );
}

export default App;
