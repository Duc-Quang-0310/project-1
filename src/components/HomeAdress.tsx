import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Home, DoneAllRounded } from "@material-ui/icons";
import { styled } from "../style/style";
import { styledIcon } from "../style/style";
import { iPersonalInfo, iStateInfo } from "../interfaces/userInfo";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../reduxToolKit/feature/userInfo/userInfoSlice";

export const HomeAdress = ({ NewInfo, setNewInfo }: iStateInfo) => {
  const dispatch = useDispatch();
  const HomeAdress: iPersonalInfo[] = [
    {
      label: "Quận",
      style: styled,
      name: "district",
      value: NewInfo.district,
      id: "standard-basic",
    },
    {
      label: "Huyện",
      style: styled,
      name: "subdistrict",
      value: NewInfo.subdistrict,
      id: "standard-basic",
    },
    {
      label: "Thành phố",
      style: styled,
      name: "city",
      value: NewInfo.city,
      id: "standard-basic",
    },
  ];

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
    <div className="UserProfile_info UserProfile_info-reverseFlex">
      <div className="info-MainText">
        <h3>Địa chỉ nhà</h3>
        <div className="MainText-input">
          {HomeAdress.map((each, index) => {
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
            onClick={handleSubmit}
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
  );
};
