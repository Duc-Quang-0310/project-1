import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import iPage from "../interfaces/page";
import { iStateInfo } from "../interfaces/userInfo";
import { RootState } from "../reduxToolKit/store";
import "../style/pages/UserProfile.scss";
import { PersonalInfo } from "../components/PersonalInfo";
import { HomeAdress } from "../components/HomeAdress";
import { Account } from "../components/Account";
import { useAppSelector } from "../reduxToolKit/hooks";

export const UserProfile: React.FC<iPage> = () => {
  const [NewInfo, setNewInfo] = useState<iStateInfo["NewInfo"]>({
    name: useAppSelector((state: RootState) => state.userInfo.name),
    district: useAppSelector((state: RootState) => state.userInfo.district),
    age: useAppSelector((state: RootState) => state.userInfo.age),
    subdistrict: useAppSelector(
      (state: RootState) => state.userInfo.subdistrict
    ),
    city: useAppSelector((state: RootState) => state.userInfo.city),
    displayName: useAppSelector(
      (state: RootState) => state.userInfo.displayName
    ),
  });

  return (
    <div>
      <Navbar />
      <div className="UserProfile_wrapper">
        <PersonalInfo NewInfo={NewInfo} setNewInfo={setNewInfo} />
        <HomeAdress NewInfo={NewInfo} setNewInfo={setNewInfo} />
        <Account NewInfo={NewInfo} setNewInfo={setNewInfo} />
      </div>
    </div>
  );
};
