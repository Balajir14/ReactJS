import { CircularProgress } from "@mui/material";

export default function Loading ({isLoading}) {
    const loading = isLoading;
    
    return(
        <div>
            {
                loading &&
            <>
                <h1>Loading..</h1>
                <CircularProgress />
            </>
            }
        </div>
    )
}