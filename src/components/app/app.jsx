import React from "react";
import {connect} from "react-redux";
import Home from "../home/home";
import AddReview from "../add-review/add-review";
import Film from "../film/film";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import SignIn from "../sign-in/sign-in";
import PrivateRoute from "../private-route/private-route";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom/";
import browserHistory from "../../browser-history";
import PropTypes from "prop-types";

const App = (props) => {
  const {films} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact>
          <Home
            films={films}
          />
        </Route>
        <PrivateRoute
          path="/mylist"
          exact
          render={() => {
            return (
              <MyList/>
            );
          }}
        />
        <Route
          path="/films/:id"
          exact
          render={({match, history}) => {
            const id = +match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            if (typeof currentFilm === `undefined`) {
              history.push(`/login`);
            }

            return (
              <Film
                film={currentFilm}
                match={match}
              />);
          }}
        />
        <PrivateRoute
          path="/films/:id/review"
          exact
          render={({match, history}) => {
            const id = +match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            if (typeof currentFilm === `undefined`) {
              history.push(`/login`);
            }

            return (
              <AddReview
                film={currentFilm}
              />);
          }}
        />
        <Route
          path="/player/:id"
          exact
          render={({match, history}) => {
            const id = +match.params.id;
            const currentFilm = films.find((film) => film.id === id);

            if (typeof currentFilm === `undefined`) {
              history.push(`/login`);
            }

            return (
              <Player
                film={currentFilm}
              />);
          }}
        />
        <Route path="/login/" exact>
          <SignIn />
        </Route>
        <Route>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => ({
  films: state.DATA.films,
});

export {App};
export default connect(mapStateToProps)(App);
