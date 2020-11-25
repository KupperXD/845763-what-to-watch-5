import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import GenreItem from '../genre-item/genre-item';
import GenreItemActive from '../genre-item/genre-item-active';
import {ALL_GENRE} from '../../const/const';

const ListGenre = (props) => {
  const {films, genre, onClickGenreFilter} = props;
  const GenreMap = new Map([[ALL_GENRE, ALL_GENRE]]);

  films.forEach((film) => {
    const type = film.genre;

    GenreMap.set(type, type);
  });

  const genreUniqList = [...GenreMap.values()];

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {genreUniqList.map((currentGenre, index) => {
          if (currentGenre === genre) {
            return (<GenreItemActive
              key={`id_genre_${index}`}
              name={currentGenre}
              onClickGenreFilter={onClickGenreFilter}
            />);
          }

          return (
            <GenreItem key={`id_genre_${index}`}
              name={currentGenre}
              onClickGenreFilter={onClickGenreFilter}
            />);
        })}
      </ul>
    </React.Fragment>
  );
};

ListGenre.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onClickGenreFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.DATA.startFilms,
  genre: state.DATA.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onClickGenreFilter(genreName) {
    dispatch(ActionCreator.changeFilter(genreName));
    dispatch(ActionCreator.getFiltredFilms());
  },
});

export {ListGenre};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenre);
