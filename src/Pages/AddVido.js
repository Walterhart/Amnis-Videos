
import { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return ( 

        <div className="add-video">
        <Grid>
                <Paper  >  
                    <Grid align ="center" >                       
                        <h2 >Sign In</h2>                        
                    </Grid>
                        <form  onSubmit = {handleSubmit}>
                            <TextField onChange ={(e) => setTitle(e.target.value)}  label = "Title" variant = "standard"/>
                            <TextField onChange ={(e) => setType(e.target.value)}  label = "TV/Show" variant = "standard"/>
                            <TextField onChange ={(e) => setRating(e.target.value)}  label = "Rating" variant = "standard"/>
                            <TextField onChange ={(e) => setDuration(e.target.value)}  label = "Duration" variant = "standard"/>
                            <TextField onChange ={(e) => setGenre(e.target.value)}  label = "Genre" variant = "standard"/>
                            <TextField onChange ={(e) => setRelease(e.target.value)}  label = "Year released" variant = "standard"/>
                            <TextField onChange ={(e) => setCountry(e.target.value)}  label = "Country availability" variant = "standard"/>
                            <TextField onChange ={(e) => setCast(e.target.value)}  label = "Cast" variant = "standard"/>
                            <TextField onChange ={(e) => setDirector(e.target.value)}  label = "Director" variant = "standard"/>
                            <TextField onChange ={(e) => setDescripition(e.target.value)}  label = "Descripition" variant = "standard"/>
                            <label> Streaming platform</label>
                            <select>    
                                <option value = "Hulu"> Hulu </option>
                                <option value = "Nexflix"> Nexflix </option>
                                <option value = "Disney+"> Disney </option>                
                            </select>
                            
                            <Button type ='submit' 
                            variant = "contained"  
                            color = "primary" 
                            fullWidth sx ={{ textTransform: 'none' }}
                            >
                               Submit
                            </Button>
                        </form>
                </Paper>
            
        </Grid>
    </div>

     );
}
 
export default AddVideo;