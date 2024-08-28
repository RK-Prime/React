import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import userContext from '../functions.js/userContext';
// import LoginModal from './Loginmodal';


const SignUp = ({setVisible})=>{

    // login visible definition
    const [loginVisible, setLoginVisible] = useState(true);

    const {setUserNameDisplay} = useContext(userContext);

    // const [dataObj, setdataObj] = useState({});

    // Input request body parameters

    // Username
    const [name, setName] = useState('');
    // Email
    const [email, setEmail] = useState('');
    // Password
    const [password, setPassword] = useState('');

    const formObj = {
        emailText : 'Email',
        passwordText : 'Password',
        usernameText : 'Username',
        loginText : 'Login',
        signupText : 'Sign Up',
        cancelText : 'Cancel',
        rememberText : 'Remeber me',
        logintosignupText : 'New to the Platform?',
        signuptologinText : 'Already have an account ?'
    };

    function handleSubmit(){
        loginVisible ? login() : signup();
    };

    function login(){
        console.log('Login !!');

        fetch('http://localhost:5000/api/userLogin',{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }).then((response)=>{
            if(!response.ok){
                throw new Error(`Response Status : ${response.status}`);
            }
            // console.log(response);
            return response.json();
        }).then((data)=>{
            console.log(data);
            // console.log(`Access Token of ${data.user.name} : ${data.accessToken}`);

            // storing accessToken on client side for a specific session.
            sessionStorage.setItem('AccessToken',data.accessToken);
            sessionStorage.setItem('UserID', data.user.id);
            sessionStorage.setItem('UserName', data.user.name);
            setUserNameDisplay(sessionStorage.getItem('UserName'));

            return data;
        })
        setVisible(false);
        setTimeout(()=>{
            window.location.reload();
        },1000)

        // setUserNameDisplay(dataObj.user.name);
        // Token check and user login;

    };

    function signup(){

        console.log('Sign Up!!');

        fetch('http://localhost:5000/api/userRegister',{
            method:"POST",
            headers : {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name : name,
                email : email,
                password : password
            })
        }).then((response)=>{
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            // console.log(response.status);
            // console.log(response);

            return response.json();
        })
        .then((data)=>{
        console.log(data);
        return data;
        });

        setVisible(false);
    }

    return(
        <>
        {
        loginVisible
        ? 
        // Login Form
        <div className='loginform'>
        <div className='formlogin'>
            <span className='cancelspan'><button 
            onClick={()=>{
                setVisible(false);
            }
            }>X</button></span>

            <span className='titleSpan'>
                <h5>{formObj.loginText}</h5>
            </span>

            {/* Email ID */}
            <label className='formlabel'>{formObj.emailText}</label>
            <input className='forminput' type='email' placeholder="Email"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            required/>
            {/* Password */}
            <label className='formlabel'>{formObj.passwordText}</label>
            <input className='forminput' type='password' placeholder="Password"
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required/>
            {/* Remember Me */}
            <span className='span checkboxspan'>
            <input type='checkbox' className='checkbox'/>
            <label>{formObj.rememberText}</label>
            </span>
            {/* Create Account */}
            <span className='span loginspan'>
            <label>{formObj.logintosignupText}</label>
            {/* Later */}
            <Link className='login' 
            onClick={()=>{
                setLoginVisible(false);
            }}>{formObj.signupText}</Link>
            </span>
            {/* Sign Up Button */}
            <span className='btnspan'>
            <button className='btn cancel'
            onClick={()=>{
                setVisible(false);
            }}
            >{formObj.cancelText}</button>
            {/* Login Button */}
            <button className='btn signup' 
            onClick={handleSubmit}
            >{formObj.loginText}</button>
            </span>
        </div>
        </div>
        : 
        // SignUp Form
        <div className='signupform'>
        <div className='formsignup'>
            <span className='cancelspan'><button 
            onClick={()=>{
                setVisible(false);
            }
            }>X</button></span>

            <span className='titleSpan'>
                <h5>{formObj.signupText}</h5>
            </span>

            {/* Username */}
            <label className='formlabel'>{formObj.usernameText}</label>
            <input className='forminput' type='text' placeholder="Username"
            onChange={(e)=>{
                setName(e.target.value);
            }}
            required/>
            {/* Email ID */}
            <label className='formlabel'>{formObj.emailText}</label>
            <input className='forminput' type='text' placeholder="Email"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            required/>
            {/* Password */}
            <label className='formlabel'>{formObj.passwordText}</label>
            <input className='forminput' type='password' placeholder="Password" 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required/>
            {/* Remember Me */}
            <span className='span checkboxspan'>
            <input type='checkbox' className='checkbox'/>
            <label>{formObj.rememberText}</label>
            </span>
            {/* Create Account signupopen */}
            <span className='span loginspan'>
            <label>{formObj.signuptologinText}</label>
            <Link className='login'
            onClick={()=>{
                setLoginVisible(true);
            }}
            >{formObj.loginText}</Link>
            </span>
            {/* Sign Up Button */}
            <span className='btnspan'>
            <button className='btn cancel'
            onClick={()=>{
                setVisible(false);
            }}
            >{formObj.cancelText}</button>
            {/* SignUp Button */}
            <button className='btn signup' 
            onClick={handleSubmit}
            >{formObj.signupText}</button>
            </span>
        </div>
        </div>
        }
        </>
    )};

export default SignUp;