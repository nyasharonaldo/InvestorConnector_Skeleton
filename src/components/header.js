import { Link } from "gatsby"
import React from "react"
import HeaderDash from "./header-dash"

const Header = ({ siteTitle }) => (
  <nav class="navbar bg-dark">
    <HeaderDash />
    <ul>
      <li>
        <Link to="/profiles">Inverstors</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fa fa-user"></i>
          <span class="hide-sm"> Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/login'>
          <i className="fa fa-sign-out"></i>
          <span class="hide-sm"> Sign Out</span>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
