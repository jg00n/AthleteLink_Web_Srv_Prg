import React, {useState} from 'react';
import logo from './images/AthletelinkCircle.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(true);

  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.getElementById("#input1");
    const input2 = document.getElementById("#input2");
    const status = document.querySelector(".status");

    let invalid = "Please fill-in all fields.";
    let invalidEmail = "The email you entered is invalid.";
    let invalidPassw = "Password must be between 8-16 characters, have at least 1 number, and 1 special character."

    if(!input1.value){
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${invalid}`;
    }else{
      validateEmail();
    }
    function validateEmail(){       //Function used to validate emails.
      let pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!input1.value.match(pattern)){
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${invalidEmail}`;
      }else{
        console.log("input1 validated");
        status.classList.remove("active");
        input1.classList.add("valid");
      }

    }

    if(!input2.value){
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${invalid}`;
    }else{
      validatePassw();
    }
    function validatePassw(){
      let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if(!input2.value.match(pattern)){
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${invalidPassw}`;

      }else{
        console.log("input2 validated");
        status.classList.remove("active");
        input2.classList.add("valid");
      }
    }

    if(input1.classList.contains('valid') && input2.classList.contains('valid')){
      console.log('submitted');

      setTimeout(()=> {
        let container = document.querySelector('.container');
        let wrapper = document.querySelector('.wrapper');
        setHide(!hide + wrapper.classList.add("hide"));
        setShow(!show + container.classList.add("show"));
      }, 1000);

    }
  }

  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");

    let invalid = "Please fill-in all fields.";
    let invalidEmail = "The email you entered is invalid.";
  if(!input1.value) {
    console.warn("validation error");
    status.classList.add("active");
    status.innerHTML = `${invalid}`;
  }else{
    validateEmail();
  }
  function validateEmail() { 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!input1.value.match(pattern)){
      console.warn("pattern failed")
      status.classList.add("active");
      status.innerHTML = `${invalidEmail}`;
    }else{
      console.log("input1 validated");
      status.classList.remove("active");
    }
   }
  }
  const handlePassword  = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");
  
    let invalid = "Please fill-in all fields.";
    let invalidPassw = "Password must be between 8-16 characters, have at least 1 number, and 1 special character."
     if(!input2.value){
        console.warn("validation error");
        status.classList.add("active");
        status.innerHTML = `${invalid}`;
     }else{
       validatePassw();
     }
     function validatePassw(){
      let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if(!input2.value.match(pattern)){
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${invalidPassw}`;

      }else{
        console.log("input2 validated");
        status.classList.remove("active");
        input2.classList.add("valid");
      }
    }
  }
     

  return (
    <div className="App">

      <div className="wrapper">
        <div className ="content">
          <div className="logo">
            <img src = {logo} alt ="" />
          </div>
          <div className="c1">
            <span>Become a member of Athlete Link today!</span>
          </div>

          <div className = "form">
            <div className="status">test</div>
            <form action="#" onSubmit={validateForm}>
              <div className = "eInput">
                <FontAwesomeIcon className='icon' icon = {faUser}/>
                <input type = "text" id="input1" placeholder='Enter Email Address' onKeyUp={handleMail}/>
              </div>
              <div className = "eInput">
                <FontAwesomeIcon className='icon' icon = {faLock}/>
                <input type = "password" id="input2" placeholder='Enter Password' onKeyUp={handlePassword}/>
              </div>
              <div className="login">
                <button type="login">Login</button>
              </div>
              <div className="submit">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>



      </div>

    </div>
  );
}

export default App;