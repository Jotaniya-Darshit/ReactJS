import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Slice";

export default function Final() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.CounterKey;
  });

  return (
    <div>
      <h1>Final</h1>
      <h1>{data.Count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
