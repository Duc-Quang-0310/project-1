import { Button, TextField } from "@material-ui/core";
import {
  AccessibilityRounded,
  Home,
  Person,
  DoneAllRounded,
} from "@material-ui/icons";
import React from "react";
import Navbar from "../components/Navbar";
import iPage from "../interfaces/page";
import "../style/pages/UserProfile.scss";

const styled = {
  maxWidth: "30em",
  marginLeft: "2.5em",
  marginBottom: "1em",
};

const styledIcon = {
  fontSize: "20em",
  color: "#ff7eee",
  opacity: "0.7",
};

export const UserProfile: React.FC<iPage> = () => {
  return (
    <div>
      <Navbar />
      <div className="UserProfile_wrapper">
        <h2>Cập nhật thông tin cá nhân</h2>
        <div className="UserProfile_info ">
          <div className="info-MainText">
            <h3>Thông tin người dùng</h3>
            <div className="MainText-input">
              <TextField id="standard-basic" label="Họ và tên" style={styled} />
              <TextField id="standard-basic" label="Tuổi" style={styled} />
              <Button
                variant="contained"
                color="secondary"
                className="MainText-btn"
                startIcon={<DoneAllRounded />}
              >
                Xác nhận
              </Button>
            </div>
          </div>
          <div className="info-Image">
            <AccessibilityRounded style={styledIcon} />
          </div>
        </div>
        <div className="UserProfile_info UserProfile_info-reverseFlex">
          <div className="info-MainText">
            <h3>Địa chỉ nhà</h3>
            <div className="MainText-input">
              <TextField id="standard-basic" label="Quận" style={styled} />
              <TextField id="standard-basic" label="Huyện" style={styled} />
              <TextField id="standard-basic" label="Thành Phố" style={styled} />
              <Button
                variant="contained"
                color="secondary"
                className="MainText-btn"
                startIcon={<DoneAllRounded />}
              >
                Xác nhận
              </Button>
            </div>
          </div>
          <div className="info-Image">
            <Home style={styledIcon} />
          </div>
        </div>
        <div className="UserProfile_info">
          <div className="info-MainText">
            <h3>Tài Khoản</h3>
            <div className="MainText-input">
              <TextField
                id="standard-basic"
                label="Tên hiển thị"
                style={styled}
              />
              <Button
                variant="contained"
                color="secondary"
                className="MainText-btn"
                startIcon={<DoneAllRounded />}
              >
                Xác nhận
              </Button>
            </div>
          </div>
          <div className="info-Image">
            <Person style={styledIcon} />
          </div>
        </div>
        <div className="UserProfile_info UserProfile_info-reverseFlex">
          <div className="info-MainText"></div>
          <div className="info-Image"></div>
        </div>
      </div>
    </div>
  );
};
