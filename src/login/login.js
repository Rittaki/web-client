import './login.css'

function Login() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12"></div>
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="mt-20">
                        <form class="form-container">
                            <h1>Sign in</h1>
                            <div class="form-group mt-3">
                                <label for="user" class="sr-only">Username</label>
                                <input type="text" id="user" class="form-control mt-1 mb-3" placeholder="Username" required autofocus/>
                            </div>
                            <label for="password" class="sr-only">Password</label>
                            <input type="password" id="password" class="form-control mt-1" placeholder="Password"/>
                            <div class="mt-3">
                                <button class="btn btn-lg btn-primary btn-block">Sign in</button>
                            </div>
                            <div class="mt-3 text-center">
                                Not Registered? <a href="#" class="text-dark fw-bold"> Create an Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login