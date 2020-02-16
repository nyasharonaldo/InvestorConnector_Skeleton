import { Link } from "gatsby"
import React from "react"
import HeaderDash from './header-dash'

const Header = ({ siteTitle }) => (
  <nav class="navbar bg-dark">
      <HeaderDash/>
      <ul>
        <li><Link to='/profiles'>Investors</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
  </nav>
)


export default Header
