import React, { Component } from "react";
import {
  SiDatadog,
  SiTerraform,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiJavascript,
  SiRuby,
  SiPostgresql,
  SiPython,
  SiSalesforce,
  SiJira,
  SiConfluence,
  SiPagerduty,
  SiZendesk,
} from "react-icons/si";

const observabilityProducts = [
  "APM & Distributed Tracing",
  "OpenTelemetry",
  "RUM & Session Replay",
  "Log Management",
  "Infrastructure & Kubernetes",
  "Database Monitoring",
  "Synthetics",
  "Data Streams (Kafka)",
  "Cloud Cost Management",
  "CI Visibility",
  "LLM Observability",
  "Workflow Automation",
];

export default class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <h1 className="header-skills">SKILLS</h1>
        <div className="all-skills">

          <div className="languages">
            <h3 className="titlo">Observability</h3>
            <SiDatadog fill="#632CA6" title="Datadog" size={40} />
            <p>Datadog</p>
            <div className="skill-tags">
              {observabilityProducts.map((p) => (
                <span key={p} className="skill-tag">{p}</span>
              ))}
            </div>
          </div>

          <div className="frontend">
            <h3 className="titlo">Cloud & Infra</h3>
            <SiAmazonaws fill="#FF9900" title="AWS" size={40} />
            <p>AWS</p>
            <SiMicrosoftazure fill="#0089D6" title="Azure" size={40} />
            <p>Azure</p>
            <SiGooglecloud fill="#4285F4" title="GCP" size={40} />
            <p>GCP</p>
            <SiDocker fill="#2496ED" title="Docker" size={40} />
            <p>Docker</p>
            <SiKubernetes fill="#326CE5" title="Kubernetes" size={40} />
            <p>Kubernetes</p>
            <SiTerraform fill="#7B42BC" title="Terraform" size={40} />
            <p>Terraform</p>
          </div>

          <div className="backend">
            <h3 className="titlo">Technical</h3>
            <SiJavascript fill="#F7DF1E" title="JavaScript" size={40} />
            <p>JavaScript</p>
            <SiRuby fill="#CC342D" title="Ruby" size={40} />
            <p>Ruby / Rails</p>
            <SiPython fill="#3776AB" title="Python" size={40} />
            <p>Python</p>
            <SiPostgresql fill="#336791" title="PostgreSQL" size={40} />
            <p>SQL / PostgreSQL</p>
            <SiApachekafka fill="#FFFFFF" title="Kafka" size={40} />
            <p>Kafka</p>
          </div>

          <div className="database">
            <h3 className="titlo">Tools</h3>
            <SiSalesforce fill="#00A1E0" title="Salesforce" size={40} />
            <p>Salesforce</p>
            <SiJira fill="#0052CC" title="Jira" size={40} />
            <p>Jira</p>
            <SiConfluence fill="#0052CC" title="Confluence" size={40} />
            <p>Confluence</p>
            <SiPagerduty fill="#06AC38" title="PagerDuty" size={40} />
            <p>PagerDuty</p>
            <SiZendesk fill="#00B388" title="Zendesk" size={40} />
            <p>Zendesk</p>
            <p style={{ color: "#ccc", marginTop: "8px" }}>ServiceNow</p>
          </div>

        </div>
      </section>
    );
  }
}
