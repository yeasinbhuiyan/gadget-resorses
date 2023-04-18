import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const {createAccount} = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPass.value
        if (password != confirmPassword) {
            return setError('please set correct confirm password')
        }
        if (password.length < 6) {
            return setError('please at least 6 digit')
        }
        createAccount(email, password)
            .then(result => {

                console.log(result.user)
                form.reset()
            })
            .catch(error => {
                console.log(error)
                form.reset()
            })

    }
    return (
        <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='confirmPass' type="password" placeholder="Confirm Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                        <p className='text-red-400'>{error}</p>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;