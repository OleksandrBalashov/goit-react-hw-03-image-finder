import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {
  isVisible: boolean;
}

const Spinner = ({ isVisible }: Props) => (
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

export default Spinner;
