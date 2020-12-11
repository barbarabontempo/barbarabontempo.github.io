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
             Hi! My name is Barbara. I'm a full-stack web developer with experience in Ruby, Ruby on Rails, Javascript, and
             React. I love building things that live on the internet and my goal is to always create products that provide performant, accessible, and 'easy to use', user experiences. Before coding, I worked and studied in various fields including medicine, policy, and law. But ultimately, I wanted to be more creative. So I learned to code! Programming soon became this magical tool that allowed me to bring my ideas to life! It has given me the opportunity to create projects that reflect on all my past experiences. I am constantly learning new things. Currently, I'm practicing my skills with MongoDB, React, Node JS, and Python.
           </p>
 
           <p>
             When I am not coding, you can find me on top of a mountain (or sometimes a volcano 🌋) soaking up the nature around me. I also find inspiration through yoga, painting, and taking photos. I am passionate about people and I hope that my work can contribute to providing for those who do not have equal resource access to technology. Oh, and also to protecting our Earth and all its natural beauty! 🌍
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
