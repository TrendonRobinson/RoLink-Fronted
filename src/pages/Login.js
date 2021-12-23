import axios from "axios";
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import "../css/register.css"

export default function Login(props) {

  let navigate = useNavigate();
  let url = "https://rolink-backend.herokuapp.com/dj-rest-auth/login/"


  // States
  let [inputs, setInputs] = useState({
    email: '',
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
      try {
          const resp = await axios.post(url, {
              "user" : {
                  "email": inputs.email,
                  "password": inputs.password,
              }
          });
          if (resp) {
            console.log(resp)
            localStorage.setItem('user', resp.data.user.token)
            setAccount(account)
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
                                <input name="email"  onChange={handleChange} type="email" placeholder="Email" value={inputs.email} />
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
