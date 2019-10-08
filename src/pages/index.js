import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="David" />
    <section className="main-content">
      <div>
        <p>
          Hi!! I'm David Reid, a 29 year old web developer from a town called
          Ballymena in Northern Ireland. When not developing on the web, I love
          to support Manchester United and the Seattle Seahawks. I am a big fan
          of Marvel, Nandos, Mountain Dew (the real American one) and burritos.
          I also love local politics and I tweet too much about it at{" "}
          <a href="https://twitter.com/reido90">reido90 (twitter profile)</a>.
        </p>
        <p>
          I first learnt how to code when I was at school but I went off to
          university and studied other things. While working for a lemonade
          delivery company, I started taking Treehouse courses at night starting
          with their HTML + CSS course then moving onto PHP and how to develop
          and implement WordPress sites. Most of the web projects I have worked
          on have been WordPress products including various e-commence sites.
        </p>
        <p>
          I also have great experience in developing themes for Shopify. I have
          recently achieved my Shopify Theme Development certificate. I have
          worked for some years in e-commerce and I love thrill of selling
          online. Recently I have been working on my Javascript skills and
          working with React, hence how I discovered GatsbyJS as a framework to
          creating super fast applications (just like this one!). I have
          recently started messing with React Native so I can write both Android
          and iPhone apps at the same time (I mean if it's good enough for
          Facebook and Instagram 😁...). If you would like to work together or
          you just want to connect, you can contact me{" "}
          <Link to="/Contact">here (contact form)</Link>.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
