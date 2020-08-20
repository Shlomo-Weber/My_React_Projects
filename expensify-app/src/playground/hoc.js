// Higher Order Component - a component(HOC) that renders another component
// reusing code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom'


const Info = (props)=>(
    <div>
        <h1>info</h1>
        <p>the info is: {props.info}</p>
    </div>
    )

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is private info for admins</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in to see the info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>, document.getElementById('app'))
