import request from 'browser-request';

import {eventsListReceived, showPage, getEventsList, createEventValidationFailed} from './../actions';

const events = store => next => action => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const data = action.data;

      request.post({url: '/events', json: true, body: data}, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('list'));
        }
      });

      break;
    case 'DELETE_EVENT':
      request({method:'DELETE', url: '/events/' + action.event._id, json: {}}, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('list'));
        }
      });

      break;
    case 'SAVE_EVENT':
      request.put({
        url: '/events/' + action.event._id,
        json: true, body: action.event
      }, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('list'));
        }
      });

      break;
    case 'SHOW_PAGE':
      if (action.page !== 'list') {
        return next(action);
      }
    case 'GET_EVENTS_LIST':
      request.get({url: '/events', json: true}, (err, httpResponse, body) => {
        store.dispatch(eventsListReceived(body.data));
      });
    default:
      return next(action);
  }
};

export default events;
