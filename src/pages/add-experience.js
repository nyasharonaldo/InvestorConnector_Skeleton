import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"

const addExperience = props => {
  return (
    <Layout>
    <section class="container">
    <h1 class="large text-primary">
        Add An Experience
      </h1>
      <p class="lead">
        <i class="fa fa-briefcase"></i> Add any investment/research
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form">
        <div class="form-group">
          <input type="text" placeholder="* Job Title" name="title" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Company" name="company" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" />
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" />
        </div>
        <div class="form-group">
          <p><input type="checkbox" name="current" value="" /> Current Job</p>
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </section>
    </Layout>
  )
}

addExperience.propTypes = {

}

export default addExperience
