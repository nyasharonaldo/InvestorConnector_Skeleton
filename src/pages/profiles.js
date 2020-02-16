import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

const profiles = props => {
  return (
    <Layout>
      <section class="container">
      <h1 class="large text-primary">
        Investors
      </h1>
      <p class="lead">
        <i class="fa fa-connectdevelop"></i>
        Browse and Connect with Investors
      </p>
      <div class="profiles">
        <div class="profile bg-light">
          <img
            class="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <div>
            <h2>John Doe</h2>
            <p>Investor at Notre Investments</p>
            <p>London, England</p>
            <Link to="/profile" class="btn btn-primary">
              View Profile
            </Link>
          </div>
          <ul>
            <li class="text-primary">
              <i class="fa fa-check"></i>Technology
            </li>
            <li class="text-primary">
              <i class="fa fa-check"></i>Industrials
            </li>
            <li class="text-primary">
              <i class="fa fa-check"></i>Energy
            </li>
            <li class="text-primary">
              <i class="fa fa-check"></i>Manufacturing
            </li>

          </ul>
        </div>
        <div class="profile bg-light">
          <img
            class="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <div>
            <h2>John Doe</h2>
            <p>Investor at Notre Investments</p>
            <p>London, England</p>
            <Link to="/profile" class="btn btn-primary">
              View Profile
            </Link>
          </div>
          <ul>
            <li class="text-primary">
              <i class="fa fa-check"></i>Technology
            </li>
            <li class="text-primary">
              <i class="fa fa-check"></i>Industrials
            </li>
            <li class="text-primary">
              <i class="fa fa-check"></i>Energy
            </li>
            <li class="text-primary">
              <i class="fa fa-check"></i>Manufacturing
            </li>

          </ul>
        </div>
      </div>
    </section>


    </Layout>
    
  )
}


export default profiles
