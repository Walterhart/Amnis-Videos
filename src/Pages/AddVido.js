
import { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';


const AddVideo = () => {
    const [type,setType]=useState('')
    const [title,setTitle]=useState('')
    const [director,setDirector]=useState('')
    const [cast,setCast]=useState('')
    const [country,setCountry]=useState('')
    const [release,setRelease]=useState('')
    const [rating,setRating]=useState('')
    const [duration,setDuration]=useState('')
    const [genre ,setGenre]=useState('')
    const [descripition,setDescripition]=useState('')
    const [platform,setPlatform]=useState('')
    const paperStyle = {padding :40, height: `auto`, width:420, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"}
 

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return ( 

        <div className="add-video">
        <Grid>
                <Paper  style = {paperStyle}>  
                                       
                        <h2 >Submit movie form</h2>                        
                
                        <form  onSubmit = {handleSubmit}  >
                            <Box  sx={{
                                '& .MuiTextField-root': { m: 2, width: '40ch' },
                            }} >
                                <TextField 
                                onChange ={(e) => setTitle(e.target.value)}  
                                label = "Title"
                                required 
                                InputProps={{ 
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField onChange ={(e) => setRating(e.target.value)}  
                                label = "Rating"
                                InputProps={{            
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField onChange ={(e) => setDuration(e.target.value)}  
                                label = "Duration" 
                                InputProps={{           
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField onChange ={(e) => setGenre(e.target.value)}  
                                label = "Genre" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }} />
                                <TextField onChange ={(e) => setRelease(e.target.value)} 
                                label = "Year released" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField onChange ={(e) => setCountry(e.target.value)} 
                                label = "Country availability" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField onChange ={(e) => setCast(e.target.value)}  
                                label = "Cast" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField onChange ={(e) => setDirector(e.target.value)}  
                                label = "Director" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>
                                <TextField  
                                label = "Platform" 
                                onChange ={(e) => setPlatform(e.target.value)}
                                select
                                
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}>
                                <MenuItem value={'Amazon'}>Amazon</MenuItem>
                                <MenuItem value={'Disney'}>Disney</MenuItem>
                                <MenuItem value={'Hulu'}>Hulu</MenuItem>
                                <MenuItem value={'Netflix'}>Netflix</MenuItem>
                                </TextField>
                                <TextField  
                                label = "Platform" 
                                onChange ={(e) => setType(e.target.value)}
                                select
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}>
                                <MenuItem value={'Movie'}>Movie</MenuItem>
                                <MenuItem value={'TV'}>TV Show</MenuItem>
                                </TextField>
                                <TextField onChange ={(e) => setDescripition(e.target.value)}  
                                label = "Descripition" 
                                multiline
                                fullWidth
                                row = {8}
                                maxRows = {40}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}/>  
                                                
                                <Button type ='submit' 
                                variant = "contained"  
                                color = "primary" 
                                style = {buttonStyle}
                                fullWidth sx ={{ textTransform: 'none' }}
                                >
                                Submit
                                </Button>
                            </Box>
                        </form>
                </Paper>
            
        </Grid>
    </div>

     );
}
 
export default AddVideo;
