import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "1aa5827a-32ae-437c-8ad5-af272edeb281",
  clientToken: "pubc580652fff48cb39f4898c685a2312bf",
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: "datadoghq.com",
  service: "barbara-portfolio",
  env: "tetst",
  // Specify a version number to identify the deployed version of your application in Datadog
  version: "1.0.0",
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
