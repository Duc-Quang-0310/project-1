import React from "react";
import "../style/pages/UserProfile.scss";
import { Button, TextField } from "@material-ui/core";
import { AccessibilityRounded, DoneAllRounded } from "@material-ui/icons";
import { iPersonalInfo, iStateInfo } from "../interfaces/userInfo";
import { styled, styledIcon } from "../style/style";
import { updateUserInfo } from "../reduxToolKit/feature/userInfo/userInfoSlice";
import { useAppDispatch } from "../reduxToolKit/hooks";

export const PersonalInfo = ({ NewInfo, setNewInfo }: iStateInfo) => {
  const dispatch = useAppDispatch();
  const infoWrapper: iPersonalInfo[] = [
    {
      label: "Họ và tên",
      style: styled,
      name: "name",
      value: NewInfo.name,
      id: "standard-basic",
    },
    {
      label: "Tuổi",
      style: styled,
      name: "age",
      value: NewInfo.age,
      id: "standard-basic",
    },
  ];

  //function
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
    <div>
      <h2>Cập nhật thông tin cá nhân</h2>
      <div className="UserProfile_info ">
        <div className="info-MainText">
          <h3>Thông tin người dùng</h3>
          <div className="MainText-input">
            {infoWrapper.map((each, index) => {
              return (
                <TextField
                  key={index}
                  id={each.id}
                  label={each.label}
                  style={each.style}
                  name={each.name}
                  value={each.value}
                  onChange={hanldeChangeInput}
                />
              );
            })}
            <Button
              variant="contained"
              color="secondary"
              className="MainText-btn"
              onClick={handleSubmit}
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
    </div>
  );
};
