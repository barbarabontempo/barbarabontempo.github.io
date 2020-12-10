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
             Hello, my name is Barbara. I'm a full-stack web developer with
             experience in Ruby, Ruby on Rails, Javascript, and
             React. I enjoy creating things that live on the internet and my goal is to always build products that provide performant, accessible, and 'easy to use', user experiences. Before coding, I was on the track to medical school and prior to medical school, I was preparing for law school. After realizing I wasn't passionate enough to continue with those fields, I found myself learning how to code. Programming became this magical tool that allowed me to use all my knowledge from my past experiences in different fields to bring my ideas to life.
           </p>
 
           <p>
             I'm constantly learning new things. Currently, those things include gaining more experience with MongoDB, React, Node JS, and Python.
           </p>
 
           <p>
             When I am not coding, I find inspiration through yoga, painting,
             bird watching, hiking, and taking photos. I am passionate about people and hope that my work can contribute to providing for those who do not have equal resource access to technology.{" "}
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
