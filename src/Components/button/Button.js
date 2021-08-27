import s from './Button.module.css'

const Button = ({loadMore}) => {
  return (
    <button type="button" className={s.button} onClick={loadMore}>Load more</button>
  );
}

export default Button;