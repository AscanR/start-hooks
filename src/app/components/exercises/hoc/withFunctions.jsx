import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        location.reload();
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        location.reload();
    };
    return (
          <CardWrapper>
              <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} {...props}/>
          </CardWrapper>
    );
};

export default withFunctions;
