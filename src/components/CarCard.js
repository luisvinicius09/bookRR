import { Link } from 'react-router-dom';
import styles from '../assets/css/carcard.module.css';

const CarCard = ({ data }) => {
  return (
    <Link to={`/cars/${data.id}`} className={styles.cardContainer}>
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