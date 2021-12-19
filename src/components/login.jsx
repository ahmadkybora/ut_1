import React, { useState } from 'react'

const Login = () => {
    
    const [payload, setPayload] = useState({username: '', password: ''});

    const onLogin = e => {
         e.preventDefault();
         let a = 1;
         let b = 2;
    }

    const b = () => {
        let b = 2;
        return b;
    }

    return (
        <div className="container offset-md-4 col-md-4">
            <h1>Login Form</h1> 
            <form name="form" onSubmit={onLogin}>
                <div className="form-group col-md-12">
                    <input 
                        className="form-control" 
                        type="text" 
                        name="username" 
                        id="username" 
                        onChange={(e) => setPayload({...payload, username: e.target.value })}
                        value={payload.username}
                        placeholder="UserName ..."
                    />
                </div>
                <div className="form-group col-md-12">
                    <input 
                        className="form-control" 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) => setPayload({...payload, password: e.target.value })}
                        value={payload.password}
                        placeholder="Password ..."
                    />
                </div>
                <button name="login" type="button" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login;