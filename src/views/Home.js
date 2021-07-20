import styles from '../assets/css/home.module.css';
import { Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SideBar from '../components/SideBar';
import BlueCar from '../assets/images/blueCar.png'
import MenuImage from '../assets/images/menu.png'
import ProfileImage from '../assets/images/profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { handleSideBar, handleProfileModal } from '../state/actions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.utils);

  const handleSB = () => {
    dispatch(handleSideBar());
  }

  const handlePM = () => {
    dispatch(handleProfileModal());
  }

  console.log(state);
  return (
    <div className={styles.wrapper}>
      {state.sideBar ? <SideBar /> : null}
      <Container fluid={true} className={styles.container}>
          <Row>
            <div className={styles.topIconsWrapper}>
              <div>
                <span onClick={handleSB} className={styles.iconClicker}>
                  <img src={MenuImage} alt="" className={styles.topIcons}/>
                </span>
              </div>
              <div>
                <span onClick={handlePM} className={styles.iconClicker}>
                  <img src={ProfileImage} alt="" className={styles.topIcons}/>
                </span>
              </div>
            </div>
          </Row>
          <Row className="flex-grow-1" style={{maxHeight: '100%'}}>
            <div>
              <div className={styles.mainImageWrapper}>
                <img src={BlueCar} alt="Blue car" className={styles.mainImage}/>
                <div className={styles.titleWrapper}>
                  <h1>YOUR NEW EXOTIC EXPERIENCE</h1>
                  <Link to="/cars">
                    See more
                    <span> -</span>
                  </Link>
                </div>
              </div>
            </div>
          </Row>

          <Modal isOpen={state.profile} toggle={handlePM}>
            <ModalHeader>
              <button onClick={handlePM}>Close</button>
            </ModalHeader>
            <ModalBody>
              Works
            </ModalBody>
          </Modal>
      </Container>
    </div>
  );
};

export default Home;