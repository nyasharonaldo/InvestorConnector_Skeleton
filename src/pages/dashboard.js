import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"

const dashboard = props => {
  return (
    <Layout>
    <section class="container">
      <h1 class="large text-primary">
        Dashboard
      </h1>
      <p class="lead">
        <i class="fa fa-user"></i>
        Welcome John Doe
      </p>
      <div class="dash-buttons">
        <Link to='/create-profile' class='btn'>
          <i class="fa fa-user-circle text-primary"></i>
          {' '}
          Edit Profile
        </Link>
        <Link to='/add-experience' class='btn'>
          <i class="fa fa-briefcase text-primary"></i>
          {' '}
          Add Experience 
        </Link>
        <Link to='/add-education' class='btn'>
          <i class="fa fa-graduation-cap text-primary"></i>
          {' '}
          Add Education
        </Link>
      </div>

      <h2 class="my-2">
        Experience Credentials
      </h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Notre Investments</td>
            <td class="hide-sm">Senior Analyst</td>
            <td class="hide-sm">
              Oct 2019 - Current
            </td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>Citibank</td>
            <td class="hide-sm">Technology Analyst</td>
            <td class="hide-sm">
              Nov 2004 - Oct 2018
            </td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="my-2">
        Education Credentials
      </h2>
      <table class="table">
        <thead>
          <tr>
            <th>School</th>
            <th class="hide-sm">Degree</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Loughborough University</td>
            <td class="hide-sm">Bachelors</td>
            <td class="hide-sm">
              2000 - 2004
            </td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="my-2">
        <button class="btn btn-danger">
          <i class="fa fa-user-minus"></i> Delete My Account
        </button>
      </div>
    </section>
    </Layout>
  )
}

dashboard.propTypes = {

}

export default dashboard
