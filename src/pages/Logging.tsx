import React from "react";
import iPage from "../interfaces/page";
import "../style/pages/Logging.scss";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";

export const Logging: React.FunctionComponent<iPage> = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLoggin = (): void => {
    if (!Input.password || !Input.username) {
      alert("Tài khoản hoặc mật khẩu không được để trống");
    } else if (Input.password !== "admin" || Input.username !== "admin") {
      alert("Sai tài khoản hoặc mật khẩu");
    } else if (Input.password === "admin" || Input.username !== "admin") {
      alert("Đăng nhập thành công");
    }
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <h2>Đăng nhập</h2>
        <form>
          <TextField
            id="outlined-basic"
            label="Tên đăng nhập"
            variant="outlined"
            className="form_input"
            type="text"
            style={{ fontSize: "5rem" }}
            name="username"
            value={Input.username}
            onChange={handleChangeInput}
          />
          <TextField
            id="outlined-basic"
            label="Mật khẩu"
            variant="outlined"
            className="form_input"
            type="password"
            name="password"
            value={Input.password}
            onChange={handleChangeInput}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ height: "3rem", marginBlockStart: "3.5rem" }}
            onClick={handleSubmitLoggin}
          >
            Đăng nhập
          </Button>
        </form>
      </div>
    </div>
  );
};
