// import logo from './logo.svg';
import './App.css';
import hero from "./images/hero-desktop.jpg";
import arrow from "./images/icon-arrow.svg";
import { userSchema } from './validations/userValidation';
import alarmIcon from './images/icon-error.svg';

function App() {

  const validate = async (event) => {
    let formData = {
      email: event.target[0].value,
    };

    const isValid = await userSchema.isValid(formData);
    const inputField = document.querySelector("#email");
    const form = document.querySelector('form');
    const imgAlarm = document.querySelector('#errorIcon');


    if (!isValid) {      
      event.preventDefault();
      inputField.style.borderColor = "red";
      inputField.style.borderWidth = "2px";

      if (!document.getElementById("error")) {
        const error = document.createElement('p');

        form.after(error);
        error.textContent = 'Please provide a valid email';
        error.style.color = "red";
        error.setAttribute("id", "error");
        error.style.marginLeft = "1rem";
        error.style.fontSize = "12px";
        imgAlarm.classList.remove("hidden");

      }
    }
    else {
      inputField.style.borderColor = "hsla(0, 42%, 61%, 0.415)";
      inputField.style.borderWidth = "1px";
      imgAlarm.classList.add("hidden");

    }
    console.log(isValid);
  }
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
          <form onSubmit={validate}>
            <input type="text" placeholder="Email Address" id="email"/>
            <img src={alarmIcon} alt="error-icon" className="hidden" id="errorIcon"/>
            <div className="input-button">
              <input type="submit" value=""/>
            </div>
          </form>
      </div>
      <div className="hero-img">
        <img src={hero} alt="hero-img"/>
      </div>
      
    </div>
    
  );
}

export default App;
