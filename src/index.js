import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createApi} from './services/api';
import rootReducer from './store/root-reducer';
import {ActionCreator} from "./store/action";
import App from "./components/app/app";
import {AuthorizationStatus} from "./const/const";
import {fetchFilms, checkAuth, loadPromoFilm} from "./store/api-action";
import {redirect} from "./store/middleweares/redirect";

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(checkAuth()),
  store.dispatch(loadPromoFilm()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});

