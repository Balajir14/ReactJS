import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

export default function Loading () {
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoading = () => {
        setLoading(!loading)
    }

    useEffect(()=>{
        loading ? setIsLoading(true) : setIsLoading(false)
    },[loading]);

    return(
        <>
            {isLoading &&  <Avatar>N</Avatar> }
            
            <Button variant="outlined" startIcon={!loading ? <DeleteIcon /> : <CircularProgress />} onClick={handleLoading}>
               { loading ? "Stop" : "Start"} 
            </Button>

            {/* {loading &&  <CircularProgress /> }
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=> {setLoading(true)}}>
                Start
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=> {setLoading(false)}}>
                Stop
            </Button> */}
        </>
    )
}