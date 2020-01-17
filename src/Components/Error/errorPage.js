import React from 'react';

const ErrorHandler = ({errorResponse}) => {
  if(!errorResponse){
    return  (
      <div>
      <div>
        <h2 className="Banner">  Error</h2> 
        </div>
         <div className="page_layout">
         <p>Status Code: 404
         <br></br>
         Error Message: BAD REQUEST</p>
         </div>
         </div>
    )};
        return (
          <div>
          <div className="welcome_page">
            <h2 className="Banner">  Error </h2> 
            </div>
             <div className="page_layout">
             <p>Status Code: {errorResponse.status}
             <br></br>
             Error Message: {errorResponse.msg}</p>
             </div>
             </div>
        )} 

export default ErrorHandler;