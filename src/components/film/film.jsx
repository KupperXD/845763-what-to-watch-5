import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadComments, addFavorite, removeFavorite} from "../../store/api-action";
import {getFullFilms, getComments} from "../../store/data/selectors";
import {getUser} from "../../store/stateApplication/selectors";

import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import CartMovieList from "../cart-movie-list/cart-movie-list";
import Tabs from './../tabs/tabs.jsx';
import withActiveItem from './../../hocs/with-active-item/with-active-item.jsx';
import withCartMovieList from "../../hocs/with-cart-movie-list/with-cart-movie-list";
import Buttons from './../buttons/buttons.jsx';

const WithActiveTabs = withActiveItem(Tabs);
const WithCartMovieList = withCartMovieList(CartMovieList);

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteHandler = this._changeFavoriteHandler.bind(this);
  }

  render() {
    const {user, films, comments, match} = this.props;
    const film = films[match.params.id - 1];

    if (!film) {
      return null;
    }

    return (
      <React.Fragment>
        <section
          className="movie-card movie-card--full"
          style={{backgroundColor: film.backgroundColor || `#fff`}}
        >
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>

            <Header className={`movie-card__head`} user={user}/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.released}</span>
                </p>

                <Buttons
                  user={user}
                  film={film}
                  clickHandler={this._changeFavoriteHandler}
                  isReview={true}
                />

              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <WithActiveTabs film={film} comments={comments}/>

            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <WithCartMovieList
              movies={films.filter((it) => it.genre === film.genre)}
              isShowMore={false}
              moviesQuantity={4}/>

          </section>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const {match, loadCommentsAction} = this.props;

    Promise.all([loadCommentsAction(parseInt(match.params.id, 10))]);
  }

  _changeFavoriteHandler() {
    const {films, addFavoriteAction, removeFavoriteAction, match} = this.props;
    const film = films[match.params.id - 1];

    if (film) {
      if (film.isFavorite) {
        removeFavoriteAction(film.id);
      } else {
        addFavoriteAction(film.id);
      }
    }
  }
}

Film.propTypes = {
  user: PropTypes.object,
  films: PropTypes.array.isRequired,
  comments: PropTypes.array,
  match: PropTypes.object.isRequired,
  loadCommentsAction: PropTypes.func,
  addFavoriteAction: PropTypes.func.isRequired,
  removeFavoriteAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  user: getUser(state),
  films: getFullFilms(state),
  comments: getComments(state, ownProps.match.params.id),
});


const mapDispachToProps = (dispatch) => ({
  loadCommentsAction: (id) => dispatch(loadComments(id)),
  addFavoriteAction: (id) => dispatch(addFavorite(id)),
  removeFavoriteAction: (id) => dispatch(removeFavorite(id)),
});

export {Film};

export default connect(mapStateToProps, mapDispachToProps)(Film);
