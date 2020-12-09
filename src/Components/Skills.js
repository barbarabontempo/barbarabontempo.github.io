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
      <div>
        <h1 className="header-skills">SKILLS</h1>
        <div className="all-skills">
          <div className="languages">
            <h3 className="titlo">Languages</h3>
            <SiJavascript fill="#F7DF1E" title="JavaScript" />
            <p>JavaScript</p>
            <SiRuby fill="#CC342D" title="Ruby" />
            <p>Ruby</p>

            <SiHtml5 fill="#E34F26" title="HTML5" />
            <p>HTML5</p>

            <SiCss3 fill="#1572B6" title="CSS3" />
            <p>CSS3</p>
          </div>

          <div className="frontend">
            <h3 className="titlo">Frontend</h3>
            <SiReact fill="#61DAFB" title="React" />
            <p>React</p>

            <SiStyledComponents fill="#DB7093" title="styled-components" />
            <p>styled-components</p>

            <SiBootstrap fill="#563D7C" title="Bootstrap" />
            <p>Bootstrap</p>
          </div>

          <div className="backend">
            <h3>Backend</h3>
            <SiRails fill="#CC0000" title="Ruby on Rails" />
            <p>Ruby on Rails</p>
          </div>

          <div className="database">
            <h3 className="titlo">Database</h3>
            <SiPostgresql fill="#336791" title="PostgreSQL" />
            <p>PostgreSQL</p>
            <SiMysql fill="#4479A1" title="MySQL" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
    );
  }
}
