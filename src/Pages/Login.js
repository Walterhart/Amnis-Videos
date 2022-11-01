import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React, {  useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { supabase } from "../config/supabaseClient";
import { useNavigate} from "react-router-dom";


const Login = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"}
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async(event) =>{
        if(event !== "SIGNED_OUT"){
            navigate('/Profile')
        }
        else{
            navigate('/')
            
        }
    })
    

    const handleSubmit  = async (e) =>{
        e.preventDefault();
        console.log(email,":",password)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
          
          if (error)
          {
              console.log("Error logging in")
              return
          }
          if(data)
          {
            console.log(data)
          }
    }

    return (  
        <div className="Login">
            <Grid>
                    <Paper  style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign In</h2>                        
                        </Grid>
                            <form  onSubmit = {handleSubmit}>
                                <TextField onChange ={(e) => setemail(e.target.value)}  label = "Email" variant = "standard" placeholder = "Enter email" fullWidth required/>
                                <TextField onChange ={(e) => setPassword(e.target.value)} label = "Password" variant = "standard" placeholder = "Enter password" type = "password" fullWidth required/>
                                <FormControlLabel
                                control = {
                                    <Checkbox 
                                    name = "checkedB"
                                    color = "primary"
                                    />
                                }
                                label = "Remember me"
                                />
                                <Button type ='submit' 
                                variant = "contained"  
                                color = "primary" 
                                fullWidth sx ={{ textTransform: 'none' }}
                                style = {buttonStyle}>
                                    Sign in
                                </Button>
                            </form>
                        <Typography>
                            <Link to ='#' sx= {{textDecoration:"none"}}>
                                    Forgot password 
                            </Link>
                        </Typography>
                        <Typography>
                            No account? 
                            <Link to ='/sign-up' sx= {{textDecoration:"none", m: 0.5 }}>
                                    Sign up
                            </Link>
                        </Typography>
                    </Paper>
                
            </Grid>
        </div>
    );
}
 
export default Login;