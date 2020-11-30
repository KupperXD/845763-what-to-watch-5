import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Footer from './../footer/footer.jsx';
import Header from './../header/header.jsx';
import CartMovieList from "../cart-movie-list/cart-movie-list";
import withCartMovieList from "../../hocs/with-cart-movie-list/with-cart-movie-list";
import {loadFavorite} from "../../store/api-action";
import {getFavorites} from "../../store/data/selectors";
import {getUser} from "../../store/stateApplication/selectors";

const WithCartMovieList = withCartMovieList(CartMovieList);

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavorites} = this.props;

    loadFavorites();
  }

  render() {
    const {user, favorites} = this.props;

    return (
      <div className="user-page">

        <Header className={`user-page__head`} title={`My list`} user={user}/>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {favorites ? (
            <WithCartMovieList
              movies={favorites}
            />
          ) : (
            <h3>{`You haven't added any movies to your favorites list.`}</h3>
          )}


        </section>

        <Footer/>
      </div>
    );
  }

}

MyList.propTypes = {
  user: PropTypes.object.isRequired,
  favorites: PropTypes.array,
  loadFavorites: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  user: getUser(state),
});


const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(loadFavorite()),
});

export {MyList};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
