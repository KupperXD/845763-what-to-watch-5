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
        <Route
          path="/films/:id"
          exact
          /* eslint-disable-next-line no-shadow */
          render={(props) => {
            // eslint-disable-next-line react/prop-types
            const id = props.match.params.id;

            const currentFilm = films.find((film) => film.id === id);

            return (
              <Film
                film={currentFilm}
              />);
          }}
        />
        <Route
          path="/films/:id/review"
          exact
          /* eslint-disable-next-line no-shadow */
          render={(props) => {
            // eslint-disable-next-line react/prop-types
            const id = props.match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            return (
              <AddReview
                film={currentFilm}
              />);
          }}
        />
        <Route
          path="/player/:id"
          exact
          /* eslint-disable-next-line no-shadow */
          render={(props) => {
            // eslint-disable-next-line react/prop-types
            const id = props.match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            return (
              <Player
                film={currentFilm}
              />);
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
