import styles from '../assets/css/sidebar.module.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleName}>
        <h1>RentalRR</h1>
      </div>
      <div className={styles.linksWrapper}>
        <Link to="/home">HOME</Link>
        <Link to="/allcars">CARS</Link>
        <a href=".">PROFILE</a>
      </div>
      <div className={styles.footerSidebar}>
        <a>Instagram</a>
        <a>Github</a>
        <a>Linkedin</a>
      </div>
    </div>
  );
};

export default SideBar;