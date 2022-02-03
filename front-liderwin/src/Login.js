import "./assets/css/login.css";
import { Link, useHistory } from "react-router-dom";
import logo from "./assets/images/logo-liderwin.png";
import React,{useState,useEffect} from 'react'
import { makeLogin } from "./api/Api";

const LoginValidator = ({token})=>{
  const [error, setError] = useState({'failAuth':false,'failUser':false,'failPassword':false});

  useEffect(() => {
      if(token){
          let newErrors = error
          if (Object.keys(token).includes("non_field_errors")){
              newErrors['failAuth'] = true
          }
          if(Object.keys(token).includes("username")){
              newErrors['failUser'] = true
          }
          if(Object.keys(token).includes("password")){
              newErrors['failPassword'] = true
          }
          setError(newErrors)
          let element = document.getElementById("validator")
          let errorText = document.createElement("p");
          errorText.innerText = "invalido"
          element.appendChild(errorText)
      }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  console.log(token)
  return(

      <div id="validator">

      </div>
  )
}

const Login = ({userLogin}) => {
  const [username,setUsername] = useState('');
  const [password,setPassword ] = useState('');
  const [newToken,setNewToken] = useState(null)

  const history = useHistory();

  const [showSignin,setShowSignin] = useState(true)

  const handleLogin = async (e) =>{
    e.preventDefault()
    try{
        let token = await makeLogin({"username":username,"password":password})
        console.log(token)
        userLogin(token)
        setNewToken(token)
        if(Object.keys(token).includes("token")){
            return history.push('/dashboard')
        }

    }catch(e){
        console.log(e)
    }
}

  const getToken = ()=>{
    const tokenString = sessionStorage.getItem('liderwin-token');
    const userToken = JSON.parse(tokenString);
    
    if(userToken){
        if (Object.keys(userToken).includes("token")){setShowSignin(false)}
    }
    if(showSignin === false){
        history.push('/dashboard')
    }
  }

  useEffect(() => {
    getToken()
}, [getToken])

  return (
    <div className="fondo">
      <div className="centrado">
        <main className="form-signin">
          <form>
            <img className="mb-4 liderwin-logo" src={logo} alt="" />
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e)=>{setUsername(e.target.value)}}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>

            <button className="w-100 secondary-btn" type="submit" value="Login" onClick={(e)=>{handleLogin(e)}} >Ingresar</button>

            <p className="mt-5 mb-3 footer-login text-center">
              Copyright © 2021 All rights reserved by TROJANS
            </p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
