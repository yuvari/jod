import React from "react"
import "./index.css"
import { useState } from "react"
import axios from "axios"
import Footer from "../Footer"
import {Link, useNavigate} from "react-router-dom"
import NavBar from "../Navbar"
// import image1178 from "..\Assets\image 1178.png"

const Login=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const NewLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('localhost:5000/api/users/login', {
                email: email,
                password: password,
            });
            setEmail('')
            setPassword('')
            localStorage.setItem('token',JSON.stringify(response.data.accesstoken));
            localStorage.setItem('val',JSON.stringify(response.data.val));
            navigate('/')

  
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
  



    return (
    <div className="login">
        <NavBar/>
    <div className="container">
        <div className="row">
            <div className="col-2">
                {/* <img src="/blue bubble (1).png" /> */}
                        <img src="/blue  bubble with dots tail.png" className="blue_bubble_with_dots_tail"  />
            </div>
            <div className="col-8">
                <div className="container-1">
                    <img src="/ShowCase logo (1).png" className="showcase_logo1" width="125px" height="125px" />
                    <form onSubmit={NewLogin} className="container form1">
                        <h6>Login</h6><br />
                        <p className="plogin">Please login using account detail bellow</p>
                        <div className="form-group">
                            <input type="text" placeholder="Enter email address" name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Enter password" name=" email-password" id="email-password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <p className="ppassword">Forget your password?</p>
                        <div className="form-group">
                            <button type="submit" className="signbtn">Sign In</button>
                        </div>
                        <p>Or</p>
                        
                        <div className="form-group">
                            <button type="button" className="googlebtn">Register with Google</button>
                        </div>
                        <br />
                         <p className="paccount">Don't have an Account?<Link to="/joinus">Create account</Link></p>
                    </form>    
                        
                </div>
            </div>
            <div className="col-2">
                {/* <img src={image1178} className="image1178" style={{marginTop: "80px", marginLeft: "-140px"}} /> */}
                        <img src="/blue round speech bubble.png" className="blue_round_speech_bubble" />
            </div>
        </div>
    </div>
    <Footer/>
        </div>
    )
}

export default Login