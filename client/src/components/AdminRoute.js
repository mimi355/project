import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userDetail } = userLogin;
  return (
    <Route
      {...rest}
      render={(props) =>
        userDetail && userDetail.role ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
}
