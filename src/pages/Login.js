import axios from "axios";
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import "../css/register.css"

export default function Login(props) {

  let navigate = useNavigate();
  let url = "https://rolink-backend.herokuapp.com/dj-rest-auth/login/"


  // States
  let [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  let accountTools = props.account
  let account = accountTools[0]
  let setAccount = accountTools[1]

  useEffect(() => {
    if (localStorage.getItem('user') !== null){
      navigate(`/home`);
    }
  }, [])


  // Functions
  const handleSubmit = (e) => {
    e.preventDefault()

    const postRequest = async () => {
      let data = {
        "username": inputs.username,
        "password": inputs.password,
      }

      try {
          const resp = await axios.post(url, data);
          if (resp.data.key) {
            localStorage.setItem('user', resp.data.key)
            navigate(`/home`);
          }
      } catch (err) {
          console.error(err);
      }
    }
    postRequest()

  }

  const handleChange = (e) => {
      const value = e.target.value
      const name = e.target.name
      const copy = Object.assign({}, inputs)

      copy[name] = value

      setInputs(copy)

      
  }

  return (
    <div className="background">
            <div className="signup-box">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            
                            <div className="Field">
                                <input name="username"  onChange={handleChange} type="username" placeholder="Username" value={inputs.username} />
                            </div>
                            
                            
                            <div className="Field">
                                <input name="password" onChange={handleChange} type="password" placeholder="Password" value={inputs.password} />
                            </div>

                            <input className="Submit" type="submit" value="Submit" />
                        </form>
                    </div>
        </div>
  );
}
