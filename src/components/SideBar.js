import styles from '../assets/css/sidebar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleCloseModals, handleCarsModal, handleProfileModal } from '../state/actions';

const SideBar = () => {
  const dispatch = useDispatch();

  const closeModals = () => {
    dispatch(handleCloseModals());
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleName}>
        <h1>RentalRR</h1>
      </div>
      <div className={styles.linksWrapper}>
        <Link
          to="/home"
          onClick={closeModals}
        >
          HOME
        </Link>
        <span
          onClick={() => {
            closeModals();
            dispatch(handleCarsModal());
          }}
        >
          CARS
        </span>
        <span
          onClick={() => {
            dispatch(handleProfileModal());
          }}
        >
          PROFILE
        </span>
      </div>
      <div className={styles.footerSidebar}>
        <a href="https://github.com/luisvinicius09">
          Github
        </a>
        <a href="https://www.linkedin.com/in/luis-vinicius/">
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default SideBar;