import Loader from "react-loader-spinner";
import s from './Spiner.module.css';

const Spiner = () => {
  return (
    <div className={s.spiner}>
      <Loader
        type="Puff"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Spiner;
