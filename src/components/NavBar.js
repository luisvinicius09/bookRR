import { Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../assets/css/navbar.module.css';
import MenuImage from '../assets/images/menu.png'
import ProfileImage from '../assets/images/profile.png'

const NavBar = ({ loggedIn, handlerSB, handlerPM }) => {
  return (
    <Row>
      <div className={styles.topIconsWrapper}>
        <div>
          <span onClick={handlerSB} className={styles.iconClicker}>
            <img src={MenuImage} alt="" className={styles.topIcons}/>
          </span>
        </div>
        <div>
          <span onClick={handlerPM} className={styles.iconClicker}>
            <img src={ProfileImage} alt="" className={styles.topIcons}/>
          </span>
        </div>
      </div>
    </Row>
  )
}

export default NavBar;