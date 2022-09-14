import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = (Component) => ({ isAuth, onLogOut, onLogin }) => {
    return (
          <>
              {isAuth ? <Component onClick={onLogOut}>Выйти</Component> : <Component onClick={onLogin}>Войти</Component>}
          </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
