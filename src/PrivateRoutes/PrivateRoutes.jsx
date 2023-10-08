import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsAuthenticated, getUserToken } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function PrivateRoutes() {
  const isAuth = useSelector(getIsAuthenticated);
  const userToken = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts(userToken));
    }
  }, [isAuth, dispatch, userToken]);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
