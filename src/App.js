import logo from './assets/logo.png';
import './App.css';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div class="item">
            <img src={logo} className="loader-pulse" alt="logo" />
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            <code>Websitemiz Yapım Aşamasındadır.</code>
          </p>
          <div className='social_media'>
            <a
              className="facebook"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled />
            </a>
            <a
              className="twitter"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterCircleFilled />
            </a>
            <a
              className="instagram"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled />
            </a>
            <a
              className="linkedin"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled />
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
