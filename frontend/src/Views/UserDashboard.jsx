import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {
  FaUser,
  FaShoppingCart,
  FaCartArrowDown,
  FaGrinStars,
} from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import UserData from "../components/UserDashboard/UserData";
import Reviews from "../components/UserDashboard/Reviews";
import Orders from "../components/UserDashboard/Orders";
import PastOrders from "../components/UserDashboard/PastOrders";
import DeactivateAccount from "../components/UserDashboard/DeactivateAccount";
import LandingDashboard from "../components/UserDashboard/LandingDashboard";
import styles from "../../static/styles/userDashboard.module.css";
import Snippet from "../components/shared/Snippet";
import ChangePassword from "../components/UserDashboard/ChangePassword";

const UserDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const renderComponent = () => {
    switch (selectedOption) {
      case 0:
        return <LandingDashboard />;
      case 1:
        return <UserData />;
      case 2:
        return <Reviews />;
      case 3:
        return <Orders />;
      case 4:
        return <PastOrders />;
      case 5:
        return <ChangePassword />;
      case 6:
        return <DeactivateAccount />;
      default:
        return <LandingDashboard />;
    }
  };

  return (
    <>
      <Snippet pageName="Dashboard" />

      <Container fluid className={`${styles.sidebarHeight} mt-5`}>
        <Row>
          <Col md={3} className={styles.sidebar}>
            <ListGroup>
              <ListGroup.Item
                action
                onClick={() => setSelectedOption(1)}
                className={styles.sidebarItem}
              >
                <FaUser size="30px" /> Datos de Usuario
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => setSelectedOption(2)}
                className={styles.sidebarItem}
              >
                <FaGrinStars size="30px" /> Reviews
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => setSelectedOption(3)}
                className={styles.sidebarItem}
              >
                <FaShoppingCart size="30px" /> Compras en Proceso
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => setSelectedOption(4)}
                className={styles.sidebarItem}
              >
                <FaCartArrowDown size="30px" /> Compras Pasadas
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => setSelectedOption(5)}
                className={styles.sidebarItem}
              >
                <RiLockPasswordLine size="30px" /> Cambiar Contraseña
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() => setSelectedOption(6)}
                className={styles.sidebarItem}
              >
                <AiOutlineUserDelete size="30px" /> Desactivar Cuenta
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="mb-3 mt-3" md={9}>{renderComponent()}</Col>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboard;
