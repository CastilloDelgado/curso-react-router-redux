import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRequest } from "../actions";
import classNames from "classnames";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import gravatar from "../utils/gravatar";

const Header = (props) => {
  const { user, isLogin, isRegsiter } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => props.logoutRequest({});

  const headerClass = classNames("header", {
    isLogin,
    isRegsiter,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <React.Fragment>
              <li>
                <a href="/">{"Nombre del Usuario"}</a>
              </li>
              <li>
                <a href="#logout" onClick={handleLogout}>
                  Cerrar Sesión
                </a>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
