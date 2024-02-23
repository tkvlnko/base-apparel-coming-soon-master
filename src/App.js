// import logo from './logo.svg';
import './App.css';
import hero from "./images/hero-desktop.jpg"
import logo from "./images/icon-arrow.svg"

function App() {
  return (
    <div className="main">
      <div className="content">
        <div className="logo-block">
          <div className="circle"></div>
          <p>BASE<br/> APPAREL</p>
        </div>
        <h1><span>We're</span><br/>coming soon</h1>
        <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
      </div>
      <div className="hero-img">
        <img src={hero} alt="hero-img"/>
      </div>
      
    </div>
    
  );
}

export default App;
