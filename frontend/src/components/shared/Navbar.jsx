import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import {
  FaShoppingCart,
  FaUser,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import styles from "../../../static/styles/navbar.module.css";
import { useShoppingCart } from "../../../hooks/context/useShoppingCart";
import { useUserProfile } from "../../../hooks/helpers/useProfileUser";
import { useGetProfile } from "../../../hooks/helpers/useGetProfile";
import useAuth from "../../../hooks/context/useAuth";
import api from "../../../static/js/axios";
import { toast } from "react-hot-toast";

const HeaderNavbar = () => {
  const auth = useAuth((state) => state.auth);
  const { data: userProfile } = useUserProfile();
  const { data: userGetProfile, isLoading } = useGetProfile();
  const logout = useAuth((state) => state.logout);
  const itemCount = useShoppingCart((state) => state.itemCount(state));

  useEffect(() => {
    if (auth?.access) {
      const verifyToken = async () => {
        try {
          await api.get("auth/users/me/");
        } catch (error) {
          if (error.response?.status === 401) {
            logout();
            toast.error(
              "Tu sesión ha expirado. Por favor, vuelve a iniciar sesión."
            );
          }
        }
      };
      verifyToken();
    }
  }, [auth, logout]);

  const handleLogout = () => {
    logout();
    toast.success("Has cerrado sesión correctamente.");
  };

  return (
    <Navbar className={`${styles.navBgColor} ${styles.navShadow}`} expand="lg">
      <Container className="">
        <LinkContainer to="/home">
          <Navbar.Brand className={`${styles.iconEffect}`}>
            <img src={logo} alt="Logo" height="50px" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link className={`${styles.linkStyle}`}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className={`${styles.linkStyle}`}>
                Sobre Nosotros
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reviews">
              <Nav.Link className={`${styles.linkStyle}`}>Reviews</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store">
              <Nav.Link className={`${styles.linkStyle}`}>Tienda</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {auth ? (
              <>
                {auth && userProfile && !isLoading && (
                  <Nav.Item className={styles.username}>
                    <img
                      src={userGetProfile.avatar}
                      alt="Avatar"
                      className={styles.avatar}
                    />
                    <span>Hola, {userGetProfile.name} </span>
                  </Nav.Item>
                )}

                {/* Ícono de Carrito de Compras */}
                <LinkContainer to="/cart">
                  <Nav.Link title="Carrito de Compras">
                    {itemCount > 0 && (
                      <span className={styles.cartItemCount}>{itemCount}</span>
                    )}
                    <FaShoppingCart className={`${styles.navIcons}`} />
                  </Nav.Link>
                </LinkContainer>

                {/* Ícono de User Dashboard */}
                <LinkContainer to="/user-dashboard">
                  <Nav.Link title="Carrito de Compras">
                    <MdDashboard className={`${styles.navIcons}`} />
                  </Nav.Link>
                </LinkContainer>

                {/* Botón de Logout */}
                <Nav.Link title="Cerrar Sesión" onClick={handleLogout}>
                  <FaSignOutAlt className={`${styles.navIcons}`} />
                </Nav.Link>
              </>
            ) : (
              <>
                {/* Ícono de Registro */}
                <LinkContainer to="/register">
                  <Nav.Link title="Crear Cuenta">
                    <FaUserPlus className={`${styles.navIcons}`} />
                  </Nav.Link>
                </LinkContainer>

                {/* Ícono de Iniciar Sesión */}
                <LinkContainer to="/login">
                  <Nav.Link title="Iniciar Sesión">
                    <FaUser className={`${styles.navIcons}`} />
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
