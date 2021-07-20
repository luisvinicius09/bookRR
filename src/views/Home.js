import styles from '../assets/css/home.module.css';
import { Container, Col, Row, } from 'reactstrap';
import SideBar from '../components/SideBar';
import BlueCar from '../assets/images/blueCar.png'
import MenuImage from '../assets/images/menu.png'
import ProfileImage from '../assets/images/profile.png'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <Container fluid={true} className={styles.container}>
        <Col>
          <Row>
            <div className={styles.topIconsWrapper}>
              <div>
                <span className={styles.iconClicker}>
                  <img src={MenuImage} alt="" className={styles.topIcons}/>
                </span>
              </div>
              <div>
                <span className={styles.iconClicker}>
                  <img src={ProfileImage} alt="" className={styles.topIcons}/>
                </span>
              </div>
            </div>
          </Row>
          <Row>
            <div className={styles.mainImageWrapper}>
              <img src={BlueCar} alt="Blue car" className={styles.mainImage}/>
            </div>
            <div>
              <h1>YOUR EXOTIC EXPERIENCE</h1>
              <a>See more</a>
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Home;