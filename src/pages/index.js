import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CPU from "../images/codeMan.svg"

const IndexPage = () => (
  <Layout>
    <section className="main-content">
      <div>
        <h1>
          <span className="DOWEB">
            <span className="i">I</span>
            <br /> DO <br /> <span className="web">WEB</span>
          </span>
          <br /> (I Can't Fix Your Printer)
        </h1>
      </div>
      <div>
        <CPU />
      </div>
    </section>
  </Layout>
)

export default IndexPage
