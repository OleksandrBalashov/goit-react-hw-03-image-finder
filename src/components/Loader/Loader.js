import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';

const Spinner = ({ isVisible }) => (
  <div className="Spinner">
    <Loader
      type="BallTriangle"
      color="#00BFFF"
      height={70}
      width={70}
      visible={isVisible}
    />
  </div>
);

Spinner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Spinner;
