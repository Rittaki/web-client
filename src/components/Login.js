import './Login.css'

function Login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="mt-20">
                        <form className="form-container">
                            <h1>Sign in</h1>
                            <div className="form-group mt-3">
                                <label htmlFor="user" className="sr-only">Username</label>
                                <input type="text" id="user" className="form-control mt-1 mb-3" placeholder="Username" required autoFocus/>
                            </div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" id="password" className="form-control mt-1" placeholder="Password" required/>
                            <div className="mt-3">
                                <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                            </div>
                            <div className="mt-3 text-center">
                                Not Registered? <a href="/Signup" className="text-dark fw-bold"> Create an Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login