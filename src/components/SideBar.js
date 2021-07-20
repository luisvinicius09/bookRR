import styles from '../assets/css/sidebar.module.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>RentalRR</h1>
      </div>
      <div className={styles.linksWrapper}>
        <Link to="/home">Home</Link>
        <Link to="/allcars">Home</Link>
      </div>
      <div>
        <a>Instagram</a>
        <a>Github</a>
        <a>Linkedin</a>
      </div>
    </div>
  );
};

export default SideBar;