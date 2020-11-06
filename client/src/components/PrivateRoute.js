import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userDetail } = userLogin;
  return (
    <Route
      {...rest}
      render={(props) =>
        userDetail ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
}
