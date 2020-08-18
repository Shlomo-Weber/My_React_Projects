import React from 'react';
import Option from './Option'

const Options = (props)=>
<div>
  <div className="widget-header">
  <h3 >Your Options</h3>
  <button 
  className="button button--link" onClick={props.handleDeleteOptions}>
  Remove All</button>
  </div>

{props.options.length ===0 && <p className="widget-message">Please add an option to begin</p>}
{props.options.map((option, index)=> 
  (<Option 
    key={option} 
    optionText={option}
    count={index +1}
    deleteSingleOption={props.deleteSingleOption}/>
    )
)}
</div>

  export default Options