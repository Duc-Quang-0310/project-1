import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import iPage from "../interfaces/page";
import {
  decrement,
  increment,
} from "../reduxToolKit/feature/counter/counterSlice";
import { RootState } from "../reduxToolKit/store";

export const TestRedux: React.FunctionComponent<iPage> = () => {
  const count: number = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};
