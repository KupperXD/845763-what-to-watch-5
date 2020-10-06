import React from "react";
import Home from "../home/home";
import PropTypes from "prop-types";

const App = (props) => {
  const {name, style, date} = props;

  return (
    <Home
      name={name}
      style={style}
      date={date}
    >

    </Home>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default App;
