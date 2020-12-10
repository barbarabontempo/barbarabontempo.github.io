import React, { Component } from "react";
import {
  SiRails,
  SiRuby,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiStyledComponents,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

export default class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <h1 className="header-skills">SKILLS</h1>
        <div className="all-skills">
          <div className="languages">
            <h3 className="titlo">Languages</h3>
            <SiJavascript fill="#F7DF1E" title="JavaScript" size={40} />
            <p>JavaScript</p>
            <SiRuby fill="#CC342D" title="Ruby" size={40} />
            <p>Ruby</p>

            <SiHtml5 fill="#E34F26" title="HTML5" size={40} />
            <p>HTML5</p>

            <SiCss3 fill="#1572B6" title="CSS3" size={40}/>
            <p>CSS3</p>
          </div>

          <div className="frontend">
            <h3 className="titlo">Frontend</h3>
            <SiReact fill="#61DAFB" title="React" size={40} />
            <p>React</p>

            <SiStyledComponents fill="#DB7093" title="styled-components" size={40}/>
            <p>styled-components</p>

            <SiBootstrap fill="#563D7C" title="Bootstrap" size={40} />
            <p>Bootstrap</p>
          </div>

          <div className="backend">
            <h3 className="titlo" >Backend</h3>
            <SiRails fill="#CC0000" title="Ruby on Rails" size={50}/>
            <p>Ruby on Rails</p>
          </div>

          <div className="database">
            <h3 className="titlo">Database</h3>
            <SiPostgresql fill="#336791" title="PostgreSQL" size={40}/>
            <p>PostgreSQL</p>
            <SiMysql fill="#4479A1" title="MySQL" size={40}/>
            <p>MySQL</p>
          </div>
        </div>
      </section>
    );
  }
}
