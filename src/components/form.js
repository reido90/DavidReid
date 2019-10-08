import React from "react"

const Form = () => (
  <div id="form-main">
    <div id="form-div">
      <form
        name="contact"
        className="form"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p className="name">
          <input
            name="name"
            type="text"
            className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
            placeholder="Name"
            id="name"
          />
        </p>

        <p className="email">
          <input
            name="email"
            type="text"
            className="validate[required,custom[email]] feedback-input"
            id="email"
            placeholder="Email"
          />
        </p>

        <p className="text">
          <textarea
            name="text"
            className="validate[required,length[6,300]] feedback-input"
            id="comment"
            placeholder="Message"
          ></textarea>
        </p>

        <div className="submit">
          <input type="submit" value="SEND" id="button-blue" />
        </div>
      </form>
    </div>
  </div>
)

export default Form
