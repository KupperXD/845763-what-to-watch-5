import React from "react";
import Home from "../home/home";
import AddReview from "../add-review/add-review";
import Film from "../film/film";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import SignIn from "../sign-in/sign-in";
import {BrowserRouter, Switch, Route} from "react-router-dom/";
import PropTypes from "prop-types";

const App = (props) => {
  const {name, style, date} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home
            name={name}
            style={style}
            date={date}
          />
        </Route>
        <Route path="/login/" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id" exact>
          <Film />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default App;
