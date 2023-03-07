import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./navigation.component.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <CrownLogo className="logo" title="Crown Clothing" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
