import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {logInAccount} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
   
    const from = location.state?.from.pathname 
    console.log(from)

    const handleLogIn=(event)=>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value 

        logInAccount(email,password)
        .then(result=>{
            console.log(result)
            form.reset()
            navigate(from)
        })
        .catch(error=>{
            console.log(error)
            form.reset()
        })

    }
    return (
        <form onSubmit={handleLogIn} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-info">Login</button>
              </div>
              <p><small>Dont you have Account? <Link to='/register'>Register</Link></small></p>
              {/* <p className='text-red-400'><small>{error}</small></p> */}

            </div>
          </div>
        </div>
      </form>
    );
};

export default Login;