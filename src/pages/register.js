import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const register = props => {
  return (
    <Layout>
      <section class="container">
        <h1 class="large text-primary"> Sign Up</h1>
        <p class="lead"> 
          <i class="fa fa-user"></i> 
           Create Your Account
        </p>
        <form action="dashboard" class="form">
          <div class="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email Address" />
            <small class="form-text">
              This site uses Gravatar, so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" minlength="6" />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              minlength="6"
            />
          </div>
          <input type="submit" value="Register" class="btn btn-primary" />
        </form>
        <p class="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Layout>
  )
}

export default register
