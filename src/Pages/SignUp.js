import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";


const SignUp = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"};
    const buttonStyle= {margin: "8px 0"};
    //const [loading, setLoading ] = useState(true);
    const [email, setEmail ] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError ] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [userNameErrorText, setUserNameErrorText] = useState('');
    const navigate = useNavigate()
    var regExPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&?])(?=.{6,10})");


    const createAccount = async(e) => {
        
        e.preventDefault();
        setPasswordError(false);
        setEmailError(false);
        setConfirmPasswordError(false);
        setConfirmPasswordErrorText('');
        setPasswordErrorText('');
        setUserNameError(false);
        setUserNameErrorText('');
        
        if(userName.charAt(0)==="_" ||userName.charAt(0)=== "-" )
        {
            setUserNameError(true);
            setUserNameErrorText("Invalid Entry");
            return
        }
        if(!regExPassword.test(password)){
            setPasswordError(true);
            setPasswordErrorText("Password must include a lowercase letter, uppercase later, special character and a number");
            return
        }   
        if (password !== confirmPassword){
            setConfirmPasswordError(true);
            setConfirmPasswordErrorText("Passwords doesnt match");
            return
        } 
    
        
        
    const { data, error} = await supabase.auth.signUp({
       
        email: email,
        password: password,
        options: { data: { user_name: userName}}
      })

      if (error)
      {
          console.log(error)
          return
      }
      console.log("data sent")

        if (data){
            console.log("si:",data)
            console.log(supabase.auth.user)
            navigate('/')
        }
    }
    

    return (  
        <div className="Login">
            <Grid>
                    <Paper  style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign Up</h2>                        
                        </Grid>
                        <form  onSubmit = {createAccount}>
                            <Typography variation = "caption"> Please fill out form to create an account</Typography>
                            <TextField onChange ={(e) => setUserName(e.target.value)} id = 'userName'label = "Username" variant = "standard" placeholder = "Enter username" fullWidth helperText = {userNameErrorText} required error = {userNameError}/>
                            <TextField onChange ={(e) => setEmail(e.target.value)} id = 'email'label = "Email" variant = "standard" placeholder = "Enter email" type = "Email" fullWidth required error = {emailError}/>
                            <TextField onChange ={(e) => setPassword(e.target.value)} id = 'password' label = "Password" variant = "standard" placeholder = "Enter passoword" type = "text"  helperText = {passwordErrorText} fullWidth required error = {passwordError}/>
                            <TextField onChange ={(e) => setConfirmPassword(e.target.value)} label = "Confirm Password" variant = "standard" placeholder = "Confirm password" type = "text" helperText = {confirmPasswordErrorText} fullWidth required error = {confirmPasswordError}/>

                            <Button type ='submit' 
                            variant = "contained"  
                            color = "primary" 
                            fullWidth sx ={{ textTransform: 'none' }}
                            style = {buttonStyle}
                            >
                                Sign up
                            </Button>
                        </form>
                        
                    </Paper>
                
            </Grid>
        </div>
    );
}
 
export default SignUp;