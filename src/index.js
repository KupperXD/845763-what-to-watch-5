import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {createApi} from './services/api';
import rootReducer from './store/root-reducer';
import {ActionCreator} from "./store/action";
import App from "./components/app/app";
import {AuthorizationStatus} from "./const/const";
import {fetchFilms} from "./store/api-action";

const api = createApi(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

Promise.all([
  store.dispatch(fetchFilms()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});

