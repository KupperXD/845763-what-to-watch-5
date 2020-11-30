import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import ListGenre from "../list-genre/list-genre";
import withCartMovieList from "../../hocs/with-cart-movie-list/with-cart-movie-list";
import {getGenres, getFilms, getPromoFilm} from "../../store/data/selectors";
import {getUser} from "../../store/stateApplication/selectors";
import CartMovieList from "../cart-movie-list/cart-movie-list";
import Footer from "../footer/footer";
import Header from "../header/header";
import Buttons from "../buttons/buttons";
import {addFavorite, removeFavorite} from "../../store/api-action";

const CartMovieListWrapped = withCartMovieList(CartMovieList);

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteHandler = this._changeFavoriteHandler.bind(this);
  }

  _changeFavoriteHandler() {
    const {promoFilm, addFavoriteAction, removeFavoriteAction} = this.props;

    if (promoFilm) {
      if (promoFilm.isFavorite) {
        removeFavoriteAction(promoFilm.id);
      } else {
        addFavoriteAction(promoFilm.id);
      }
    }
  }

  render() {

    const {films, user, promoFilm} = this.props;

    const promoFilmCurrent = promoFilm;

    return (
      <React.Fragment>
        <section
          className="movie-card"
          style={{backgroundColor: promoFilmCurrent.backgroundColor || `#fff`}}>
          <div className="movie-card__bg">
            <img src={promoFilmCurrent.backgroundImage} alt={promoFilmCurrent.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={`movie-card__head`} user={user}/>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={promoFilmCurrent.posterImage} alt={`${promoFilmCurrent.name} poster`} width="218"
                  height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promoFilmCurrent.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promoFilmCurrent.genre}</span>
                  <span className="movie-card__year">{promoFilmCurrent.released}</span>
                </p>

                <Buttons
                  film={promoFilmCurrent}
                  user={user}
                  onClickButton={this._changeFavoriteHandler}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ListGenre/>

            <CartMovieListWrapped
              movies={films}
            />

          </section>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  films: PropTypes.array.isRequired,
  user: PropTypes.object,
  promoFilm: PropTypes.object,
  addFavoriteAction: PropTypes.func.isRequired,
  removeFavoriteAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  user: getUser(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFavoriteAction: (id) => dispatch(addFavorite(id)),
  removeFavoriteAction: (id) => dispatch(removeFavorite(id)),
});

export {Home};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

