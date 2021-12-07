import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCount } from '../slice/counterSlice';
import { Button, Typography } from '@mui/material';
import ReduxWrapper from '../wrapper/ReduxWrapper';

const Counter = () => {
  const countState = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <Button variant={"outlined"} onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant={"outlined"} onClick={() => dispatch(decrement())}>Decrement</Button>
      <ReduxWrapper state={countState}>
        <Typography variant={"h4"}>{countState.value}</Typography>
      </ReduxWrapper>
    </div>
  );
};

export default Counter;