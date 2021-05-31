import request from 'browser-request';

import {loginUser, loginUserValidationFailed, showPage} from './../actions';

const login = store => next => action => {
  switch (action.type) {
    case 'LOGIN_USER':
      const data = action.user;

      request.post({url: '/users/login', json: true, body: data}, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('venuesList'));
        } else {
          let error;
          if (httpResponse.statusCode === 403) {
            error = 'Incorrect login or password!';
          } else {
            error = body.errors;
          }
          store.dispatch(loginUserValidationFailed(error));
        }
      });

      return next(action);
    default:
      return next(action);
  }
};

export default login;
