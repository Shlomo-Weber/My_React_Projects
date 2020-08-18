import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = (props)=>(
    <div>
    <h1>This is my thing</h1>
    <p>herp derp diddly do</p>
    <p>The id for this portfolio item is {props.match.params.id}</p>
    <Link to="/portfolio">Go back to my work page</Link>
    </div>
)
export default PortfolioItem