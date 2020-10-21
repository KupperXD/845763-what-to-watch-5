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
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home
            films={films}
          />
        </Route>
        <Route path="/login/" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList
            film={films[0]}
          />
        </Route>
        <Route path="/films/:id" exact>
          <Film
            film={films[0]}
          />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview
            film={films[0]}
          />
        </Route>
        <Route path="/player/:id" exact>
          <Player
            film={films[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
