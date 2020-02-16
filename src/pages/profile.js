import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"

const profile = props => {
  return (
    <Layout>
      <section class="container">
      <Link to="/profiles">Back To Profiles</Link>

      <div class="profile-grid my-1">
        {/* <!-- Top --> */}
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />

          <h1 class="large">John Doe</h1>
          <p class="lead">Investor at Notre Investments</p>
          <p>London, England</p>
          <div class="icons my-1">
            <a href="#">
              <i class="fa fa-globe fa-2x"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter fa-2x"></i>
            </a>
            <a href="#">
              <i class="fa fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin fa-2x"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        {/* <!-- About --> */}
        <div class="profile-about bg-light p-2">
          <h2 class="text-primary">John's Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quibusdam nemo at, labore rerum tempore ratione alias enim velit
            ipsam!
          </p>
          <div class="line"></div>
            <h2 class="text-primary">Skill Set</h2>
            <div class="skills">
              <div class="p-1"><i class="fa fa-check p-1"></i>Commodities</div>
              <div class="p-1"><i class="fa fa-check p-1"></i>Equities</div>
              <div class="p-1"><i class="fa fa-check p-1"></i>Bonds</div>
              <div class="p-1"><i class="fa fa-check p-1"></i>Corporate Bonds</div>
            </div>
        </div>
        {/* <!-- Experience --> */}
        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">Experiences</h2>
          <div>
            <h3>Notre Investments</h3>
            <p>Oct 2019 - Current</p>
            <p><strong>Position: </strong>Senior Analyst</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perferendis, rerum voluptatem
              ducimus beatae voluptas aliquam.
            </p>
          </div>
          <div>
            <h3>Citibank</h3>
            <p>Nov 2004 - Oct 2018</p>
            <p><strong>Position: </strong>Technology Analyst</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perferendis, rerum voluptatem
              ducimus beatae voluptas aliquam.
            </p>
          </div>
        </div>
        {/* <!-- Education --> */}
        <div class="profile-edu bg-white p-2">
          <h2 class="text-primary">Education</h2>
          <div>
            <h3>Loughborough University</h3>
            <p>2000 - 2004</p>
            <p><strong>Degree: </strong>Bachelors</p>
            <p>
              <strong>Field of Study: </strong>Computer Science and Mathematics
            </p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestias molestiae corrupti ipsam
              distinctio dignissimos nobis, reprehenderit quae dolor adipisci
              similique nostrum aspernatur autem atque necessitatibus, velit
              sunt. Quis recusandae a dolor nihil.
            </p>
          </div>
        </div>
        {/* <!-- Github Repos --> */}
        <div class="profile-github">
          <h2 class="text-primary my-1">
            <i class="fa fa-github"></i> Github Repos
          </h2>
          <div class="repo bg-white my-1 p-1">
            <div>
              <h4><a href="#">Repo One</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                illum illo nihil!
              </p>
            </div>

            <div>
              <ul>
                <li class="badge badge-primary">Stars: 1</li>
                <li class="badge badge-dark">Watchers: 434</li>
                <li class="badge badge-light">Forks: 2</li>
              </ul>
            </div>
          </div>
          <div class="repo bg-white my-1 p-1">
            <div>
              <h4><a href="#">Repo Two</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                illum illo nihil!
              </p>
            </div>

            <div>
              <ul>
                <li class="badge badge-primary">Stars: 44</li>
                <li class="badge badge-dark">Watchers: 20</li>
                <li class="badge badge-light">Forks: 443</li>
              </ul>
            </div>
          </div>
          <div class="repo bg-white my-1 p-1">
            <div>
              <h4><a href="#">Repo Three</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                illum illo nihil!
              </p>
            </div>

            <div>
              <ul>
                <li class="badge badge-primary">Stars: 4</li>
                <li class="badge badge-dark">Watchers: 2</li>
                <li class="badge badge-light">Forks: 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    </Layout>
    
  )
}


export default profile
