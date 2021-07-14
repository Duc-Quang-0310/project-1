import React from "react";
import iPage from "../interfaces/page";
import "../style/components/Navbar.scss";
import { Link } from "react-router-dom";
import {
  VpnKey,
  ExitToApp,
  AccountBox,
  HorizontalSplit,
  AccountTree,
  DevicesOther,
} from "@material-ui/icons";

const Navbar: React.FunctionComponent = () => {
  return (
    <div>
      <nav className="navbar">
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
          <li className="navbar_items">
            <Link to="#">
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
      </nav>
    </div>
  );
};

export default Navbar;
