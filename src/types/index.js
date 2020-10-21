import PropTypes from "prop-types";

export const filmType = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rating: PropTypes.shape({
    score: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired
};
