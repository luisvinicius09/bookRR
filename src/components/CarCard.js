import { Link } from 'react-router-dom';

const CarCard = ({ data }) => {
  return (
    <Link>
      <div>
        {data.name}
      </div>
    </Link>
  );
};

export default CarCard;