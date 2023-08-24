//import logo from './assets/logobgsuz2.png';
import './App.css';
//import { FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
