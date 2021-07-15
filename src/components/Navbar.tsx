import React from "react";
import "../style/components/Navbar.scss";
import { Link, useHistory } from "react-router-dom";
import {
  VpnKey,
  ExitToApp,
  AccountBox,
  HorizontalSplit,
  AccountTree,
  History,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxToolKit/store";
import { logging } from "../reduxToolKit/feature/logging/loggingSlice";

const Navbar: React.FunctionComponent = () => {
  const logginStatus = useSelector((state: RootState) => state.signIn.loggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <nav className="navbar">
        {!logginStatus ? (
          <ul>
            <li className="navbar_logo">
              <Link to="#">
                <span>Side Bar</span>
                <HorizontalSplit
                  style={{
                    marginInline: "1.5rem",
                    fontSize: "2rem",
                    color: "#ff7eee",
                  }}
                  className="nav-logo_icon"
                />
              </Link>
            </li>
            <li className="navbar_items">
              <Link to="/DangNhap">
                <VpnKey
                  style={{ marginInline: "1.3rem", fontSize: "2.3rem" }}
                  className="nav_icon"
                />
                <span>Đăng nhập</span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="navbar_logo">
              <Link to="#" onClick={() => history.push("/")}>
                <span>Landing </span>
                <History
                  style={{
                    marginInline: "1.5rem",
                    fontSize: "2rem",
                    color: "#ff7eee",
                  }}
                  className="nav-logo_icon"
                />
              </Link>
            </li>
            <li className="navbar_items">
              <Link to="" onClick={() => dispatch(logging())}>
                <ExitToApp
                  style={{ marginInline: "1.3rem", fontSize: "2.3rem" }}
                  className="nav_icon"
                />
                <span>Đăng xuất</span>
              </Link>
            </li>
            <li className="navbar_items">
              <Link to="/ThongTinTaiKhoan">
                <AccountBox
                  style={{ marginInline: "1.3rem", fontSize: "2.3rem" }}
                  className="nav_icon"
                />
                <span>Thông tin cá nhân</span>
              </Link>
            </li>
            <li className="navbar_items">
              <Link to="/testRedux">
                <AccountTree
                  style={{ marginInline: "1.3rem", fontSize: "2.3rem" }}
                  className="nav_icon"
                />
                <span>Test Redux</span>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
