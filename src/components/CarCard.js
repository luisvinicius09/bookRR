import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../assets/css/carcard.module.css';
import { fetchCarData, handleCloseModals } from '../state/actions';

const CarCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/cars/${data.id}`} 
      className={styles.cardContainer}
      onClick={() => {
        dispatch(fetchCarData(data.id));
        dispatch(handleCloseModals());
      }}
    >
      <div className={styles.imgContainer}>
        <img src={data.image_url} alt={data.name} />
      </div>
      <div>
        {data.name}
      </div>
    </Link>
  );
};

export default CarCard;