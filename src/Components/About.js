import React, { Component } from "react";
import resume from "../resume/resume.pdf";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Barbara Bontempo Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              Hey! I'm Barbara. I'm an enterprise Technical Account Manager and
              Solutions Architect based in New York, where I help some of the
              world's largest companies get real value out of complex data, AI,
              and observability platforms. My accounts span industries from
              healthcare to automotive to logistics. Day to day, that means
              being the technical lead our biggest customers rely on. I
              architect solutions, untangle thorny distributed-systems problems,
              guide teams through AI adoption, and make sure the technology
              actually delivers on what it promised.
            </p>

            <p>
              I didn't start here. I studied Public Policy at NYU, spent time
              around fields like medicine and law, and eventually realized I
              wanted to build the things I cared about rather than just write
              about them. So I taught myself to code, full-stack, with Ruby on
              Rails and React, and programming became the tool that let me bring
              ideas to life. That foundation still shapes how I work. I speak
              both "engineer" and "human," and I'm as comfortable in a terminal
              as I am in an executive business review.
            </p>

            <p>
              Lately I'm going deeper on data and AI, from Spark and the
              Lakehouse to generative AI, because I think the next wave of
              value for enterprises lives in how well they can use their data
              and the models they build on top of it.
            </p>

            <p>
              When I'm not working, you'll find me on top of a mountain
              (occasionally a volcano 🌋) soaking up the nature around me, or
              finding inspiration through yoga, painting, and photography. I
              care deeply about people, especially closing the gap for those
              without equal access to technology, and about protecting our
              Earth and all its natural beauty. 🌍
            </p>

            <div className="row">
              <div className="columns contact-details">
                {/* <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p> */}{" "}
                {/* <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p> */}{" "}
                {/* <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p> */}{" "}
                {/* <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p> */}
              </div>
              <div className="columns download">
                <p className="download-butt">
                  <a href={resume} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
