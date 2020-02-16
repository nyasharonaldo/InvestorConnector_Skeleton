import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle }) => (
  <h1 class='header-dash'>
    <Link to='/dashboard'>
      <i class="fa fa-code"></i> InvestorConnector
    </Link>
  </h1>
)

export default Header
