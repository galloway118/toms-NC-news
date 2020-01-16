import React from 'react';
// import '../../welcome_page.css';
// import Banner from '../../Error_components/ContactError';



const ErrorHandler = ({errorResponse}) => {
  if(!errorResponse){
    return  (
      <div>
      <div className="welcome_page">
        <h2 className="Banner">  Error</h2> 
        </div>
         <div className="page_layout">
         <p>Status Code: 404
         <br></br>
         Error Message: BAD REQUEST</p>
         </div>
         </div>
    )
  };
  
  console.log(errorResponse)
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
        )
      } 


export default ErrorHandler;