import React from "react";
import { styled } from "../style/style";
import { styledIcon } from "../style/style";
import { Button, TextField } from "@material-ui/core";
import { Person, DoneAllRounded } from "@material-ui/icons";
import { iStateInfo } from "../interfaces/userInfo";
import { updateUserInfo } from "../reduxToolKit/feature/userInfo/userInfoSlice";
import { useDispatch } from "react-redux";

export const Account = ({ NewInfo, setNewInfo }: iStateInfo) => {
  const dispatch = useDispatch();
  const hanldeChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setNewInfo({
      ...NewInfo,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(): void {
    dispatch(updateUserInfo(NewInfo));
  }
  return (
    <div className="UserProfile_info">
      <div className="info-MainText">
        <h3>Tài Khoản</h3>
        <div className="MainText-input">
          <TextField
            id="standard-basic"
            label="Tên hiển thị"
            style={styled}
            name="displayName"
            value={NewInfo.displayName}
            onChange={hanldeChangeInput}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
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
  );
};
