import React, {useState} from 'react';
import logo from './images/AthletelinkCircle.png';
import './App.css';
import AthleteHome from './components/AthleteHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(true);

  
  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");
  
    let validation = "Please fill-in the fields below.";
    if(!input1.value && !input2.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    }else{
      if(validateEmail())
        validatePassw();
    }
   
     if(input1.classList.contains("valid") && input2.classList.contains("valid")){
       console.log('submitted');
       setTimeout(() => {
        //  window.location.href = 'AthleteLinkHome';
        let container = document.querySelector(".container");
        let wrapper = document.querySelector(".wrapper");
        setHide(!hide + wrapper.classList.add("hide"));
        setShow(!show + container.classList.add("show"));
  
         
       }, 1000);
     }
    }

    const validateEmail =() =>{    //Function used to validate emails.
      const input1 = document.querySelector("#input1");
      const status = document.querySelector(".status");
      let invalidEmail = "The email you entered is invalid.";
      let pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!input1.value.match(pattern)){
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${invalidEmail}`;
        return false;
      }else{
        console.log("input1 validated");
        status.classList.remove("active");
        input1.classList.add("valid");
        return true;
      }
  
    }
  
    const validatePassw =() =>{    //Function used to validate passwords.
      const input2 = document.querySelector("#input2");
      const status = document.querySelector(".status");
      let invalidPassw = "Password must be between 8-16 characters, have at least 1 number, and 1 special character."
      let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if(!input2.value.match(pattern)){
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${invalidPassw}`;
        return false;
      }else{
        console.log("input2 validated");
        status.classList.remove("active");
        input2.classList.add("valid");
        return true;
      }
  
    }
  return (
    <div className="App">
      <AthleteHome/>
      <div className="wrapper">
        <div className ="content">
          <div className="logo">
            <img src = {logo} alt ="" />
          </div>
          <div className="c1">
            <span>Welcome back to Athlete Link!</span>
          </div>

          <div className = "form">
            <div className="status">test</div>
            <form action="#" onSubmit={validateForm}>
              <div className = "eInput">
                <FontAwesomeIcon className='icon' icon = {faUser}/>
                  {/*onKeyUp = {function}*/}
                <input id='input1' type = "text" placeholder='Enter Email Address'/>
              </div>
              <div className = "eInput">
                <FontAwesomeIcon className='icon' icon = {faLock}/>
                <input id='input2' type = "password" placeholder='Enter Password'/>
              </div>
              <div className="login">
                <button type="submit" onClick={validateForm}>Login</button>
              </div>
              <div className="submit">
                <button type="button">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;