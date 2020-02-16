import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

const login = props => {
  return (
    <Layout>
      <section class="container">
      {/* <!-- Alert --> */}
      <div class="alert alert-danger">
        Invalid Credentials
      </div>
      <h1 class="large text-primary">
        Sign In
      </h1>
      <p class="lead"><i class="fa fa-user"></i> Login To Your Account</p>
      <form action="/dashboard" class="form">
        <div class="form-group">
          <input type="email" placeholder="Email Address" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" minlength="6" />
        </div>
        <input type="submit" value="Login" class="btn btn-primary" />
      </form>
      <p class="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>

    </Layout>
    
  )
}


export default login
