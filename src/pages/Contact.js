import React from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Talk To Me" />
    <div className="container">
      <p>
        The first step in any collaboration is the first contact. Use the form
        below to get in contact with me. Leave your contact details and I will
        get back to you <span role="img">😁</span>.
      </p>
      <p>Contact Me If...</p>
      <ul>
        <li>You Need Help With Your Website Or Need A New Website</li>
        <li>
          You Want To Know How Your Buisness Can Develop It's Own Space On The
          Web
        </li>
        <li>You Need A KickAss WebStore To Sell Your Products</li>
        <li>You Have A Killer App Idea That Will Make Us Very Rich</li>
        <li>You Just Want A Chat</li>
      </ul>
      <Form />
    </div>
  </Layout>
)

export default Contact
