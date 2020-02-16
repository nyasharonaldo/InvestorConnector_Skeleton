import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const posts = props => {
  return (
    <Layout>
      <section class="container">
        <h1 class="large text-primary">Posts</h1>
        <p class="lead">
          <i class="fa fa-user"></i>
          Welcome to the community
        </p>

        <div class="post-form">
          <div class="post-form-header bg-primary">
            <h3>Say Something...</h3>
          </div>
          <form class="form my-1">
            <textarea cols="30" rows="5" placeholder="Create a post"></textarea>
            <input type="submit" value="Submit" class="btn btn-dark my-1" />
          </form>
          <div class="posts">
            <div class="post bg-white my-1 p-1">
              <div>
                <Link to="/profile/">
                  <img
                    class="round-img my-1"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </Link>
              </div>
              <div>
                <p class="my-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, dicta. Id, esse aut placeat eos beatae explicabo velit
                  dolore sapiente. Dicta voluptate aperiam voluptates deserunt,
                  inventore culpa incidunt commodi voluptatum.
                </p>
                <button class="btn">
                  <i class="fa fa-thumbs-up"></i>
                  <span>4</span>
                </button>
                <button class="btn">
                  <i class="fa fa-thumbs-down"></i>
                </button>
                <Link to="/post" class="btn btn-primary">
                  Discussion
                </Link>
              </div>
            </div>
            <div class="post bg-white my-1 p-1">
              <div>
                <Link to="/profile">
                  <img
                    class="round-img my-1"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                  />
                  <h4>John Doe</h4>
                </Link>
              </div>
              <div>
                <p class="my-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, dicta. Id, esse aut placeat eos beatae explicabo velit
                  dolore sapiente. Dicta voluptate aperiam voluptates deserunt,
                  inventore culpa incidunt commodi voluptatum.
                </p>
                <button class="btn">
                  <i class="fa fa-thumbs-up"></i>
                  <span>4</span>
                </button>
                <button class="btn">
                  <i class="fa fa-thumbs-down"></i>
                </button>
                <Link to="/post" class="btn btn-primary">
                  Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default posts
