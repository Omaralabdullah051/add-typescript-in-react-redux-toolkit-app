import React, { useState } from "react";
// import { useSelector,useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useAppSelector(
    (state) => state.icecream.numOfIceCreams
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecreams
      </button>
    </div>
  );
};

export default IcecreamView;
