import s from './Button.module.css';
import PropTypes from 'prop-types';


const Button = ({loadMore}) => {
  return (
    <button type="button" className={s.button} onClick={loadMore}>Load more</button>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func,
}

export default Button;