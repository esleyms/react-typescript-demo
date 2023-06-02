type StatusPropos = {
    status: 'loading' | 'success' | 'error'
}




export const Status = (props:StatusPropos) => {
let message
if (props.status==='loading'){
    message = <p>Loading...</p>
    } else if (props.status==='success') {
        message = 'Data feched sucessfully'
    }  else if (props.status==='error') {
    message = 'Error fetchig data'
} 

    return (    
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}