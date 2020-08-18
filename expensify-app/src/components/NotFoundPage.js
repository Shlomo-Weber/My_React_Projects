import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = ()=>(
    <div>
     <h1 style={{textAlign:"center", marginTop:"150px"}}>404! This page does not exist</h1>
        <Link style={{paddingLeft:"870px"}} to="/">Go to the Home Page</Link>
     </div>
)

export default NotFoundPage