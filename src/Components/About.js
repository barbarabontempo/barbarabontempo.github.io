import React, { Component } from "react";
import resume from '../resume/resume.pdf'


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
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              Hello, my name is Barbara. I'm a full stack engineer with
              experience in Ruby, Ruby on Rails, Javascript, PostGreSQL, and
              React.
            </p>
            <p>
              I have a passion for driving diversity and inclusion in the tech
              scene and have a strong interest in curating a more eco friendly
              environment both inside and outside the office.
            </p>

            <p>
              I'm constantly learning new things. Currently those things include
              gaining more experience with MongoDB, React, Node JS, and Python.
            </p>

            <p>
              When I am not coding, I find inspiration through yoga, painting,
              bird watching, hiking, and taking photos. I am passionate about
              people and hope that my work can contribute in providing for those
              who do not have equal resource access to technology.{" "}
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
					   </p> */}
              </div>
              <div className="columns download">
                <p>
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
