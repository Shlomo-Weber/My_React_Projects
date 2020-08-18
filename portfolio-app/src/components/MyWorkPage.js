import React from 'react';
import {Link} from 'react-router-dom'


const MyWorkPage =()=>(
    <div>
    <h1>This is my work!</h1>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
    </div>
)

export default MyWorkPage