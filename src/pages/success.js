import React from "react"
import Form from "../components/form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div className="container">
      <h1>Hey! Talk To Me!</h1>
      <p>
        The first step in any collaboration is the first contact. Use the form
        below to get in contact with me. Leave your contact details and I will
        get back to you <span role="img">😁</span>.
      </p>

      <section className="contactPage">
        <div className="left">
          <h3>Thank You! I will be in contact, unless you're a bot!</h3>
        </div>
        <div className="contactPageRight"></div>
      </section>
    </div>
  </Layout>
)

export default Contact
