import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) netlifyIdentity.open()
  else console.log("netlifyIdentity not defined")
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }
  render() {
    return <div></div>
  }
}

const IndexPage = () => {
  
  return (
    <Layout>
      <NetlifyIdentity/>
      <SEO title="Investor Connector" />
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Investor Connector</h1>
            <p class="lead">Share & Learn new Investment Techniques</p>
            <div class="buttons">
              <button class="btn btn-primary">Sign Up</button>
              <button class="btn btn" onClick={()=> {openNetlifyModal()}}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
