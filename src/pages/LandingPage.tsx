import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import iPage from "../interfaces/page";
import { RootState } from "../reduxToolKit/store";
import "../style/pages/LandingPage.scss";

export const LandingPage: React.FunctionComponent<iPage> = () => {
  const logginStatus = useSelector((state: RootState) => state.signIn.loggedIn);
  const user = useSelector((state: RootState) => state.userInfo.displayName);

  return (
    <div className="home_container">
      <Navbar />
      <div className="home_wrapper">
        {!logginStatus ? (
          <h1 className="inactive">Hello</h1>
        ) : (
          <div>
            <h2>Welcome back</h2>
            <h1>{user}</h1>
          </div>
        )}
      </div>
    </div>
  );
};
