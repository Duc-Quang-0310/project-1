import { Button, TextField } from "@material-ui/core";
import { TextFields } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import iPage from "../interfaces/page";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementSaga,
} from "../reduxToolKit/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../reduxToolKit/hooks";
import { RootState } from "../reduxToolKit/store";

export const TestRedux: React.FunctionComponent<iPage> = () => {
  const count: number = useAppSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useAppDispatch();
  const [Input, setInput] = useState(count);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    let num = parseInt(e.target.value);
    setInput(num);
  };

  const handleAddAmountButton = (): void => {
    dispatch(incrementSaga(Input));
  };
  return (
    <div>
      <div>
        <TextField
          id="filled-basic"
          label="Amount"
          style={{ marginBlock: "3em", marginInline: " 7em" }}
          variant="filled"
          onChange={handleChangeInput}
        />
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Increment value"
          style={{ marginBlock: "4em" }}
          onClick={handleAddAmountButton}
        >
          Increment by amount - Saga
        </Button>
        <br />
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Increment value"
          style={{ marginInline: "3em" }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span style={{ fontSize: "2em" }}>{count}</span>
        <Button
          variant="outlined"
          color="secondary"
          aria-label="Decrement value"
          style={{ marginInline: "3em" }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};
