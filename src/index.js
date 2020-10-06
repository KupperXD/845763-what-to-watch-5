import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const information = {
  name: `Spider-man`,
  style: `thriller`,
  date: `2020`
};

ReactDOM.render(
    <App
      name={information.name}
      style={information.style}
      date={information.date}
    />,
    document.querySelector(`#root`)
);
