import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="container">
      <section className="aboutTheReido">
        <div className="left">
          <Image /> <h1>Hey, its me!</h1>
          <p>
            My name is David Reid and I am 29 year old web developer from a town
            called Ballymena in Northern Ireland.
          </p>
          <p>
            When I am not developing on the web, I love to follow Manchester
            United and the Seattle Seahawks. I am a big fan of Marvel films,
            Apple products, Mountain Dew (the real American one) and Boojum
            burritos. I also love local politics and I tweet too much about it
            at
            <a
              href="https://www.twitter.com/reido90"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              @reido90
            </a>
            .
          </p>
        </div>

        <div className="right">
          <p>
            Three years ago I was diagnosed with Crohn's disease and because of
            this, I am now an activist for Crohn's and Colitis awareness,
            sharing my story and helping others who have been diagnosed.
          </p>
          <p>
            I first learnt how to code when I was at school but I then went off
            to university and studied different things. While working for a
            lemonade delivery company, I started taking{" "}
            <a
              href="https://www.teamtreehouse.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Treehouse
            </a>{" "}
            courses (great for beginners by the way!) when I got home from work.{" "}
          </p>
          <p>
            I started with their HTML + CSS course. I then taught myself PHP and
            how to develop WordPress sites. Most of the projects I have worked
            on have been WordPress products including various e-commence sites.
            I also have great experience in developing themes for Shopify. I
            love thrill of selling online.
          </p>

          <p>
            Recently I have been working on my Javascript skills and working
            with React, hence how I discovered GatsbyJS as a framework to
            creating super fast applications (just like this one!). I have
            recently started messing with React Native so I can write both
            Android and iPhone apps at the same time. (I mean if it's good
            enough for Facebook and Instagram <span role="img">😁</span>...)
          </p>
          <p>
            If you would like to work together or you just want to connect you
            can contact me <Link to="/Contact">here</Link>.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
