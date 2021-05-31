import request from 'browser-request';

import {venuesListReceived, showPage} from './../actions';

const venues = store => next => action => {
  switch (action.type) {
    case 'DELETE_VENUE':
      request({method:'DELETE', url: '/venues/' + action.venue._id, json: {}}, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('venuesList'));
        }
      });

      break;
    case 'SAVE_VENUE':
      request.put({
        url: '/venues/' + action.venue._id,
        json: true, body: action.venue
      }, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('venuesList'));
        }
      });

      break;
    case 'CREATE_VENUE':
      const data = action.data;

      request.post({url: '/venues', json: true, body: data}, (err, httpResponse, body) => {
        if (!err && httpResponse.statusCode === 200 && body.status === 'ok') {
          store.dispatch(showPage('venuesList'));
        }
      });

      break;
    case 'SHOW_PAGE':
      if (action.page !== 'venuesList') {
        return next(action);
      }
    case 'GET_VENUES_LIST':
      request.get({url: '/venues', json: true}, (err, httpResponse, body) => {
        store.dispatch(venuesListReceived(body.data));
      });
    default:
      return next(action);
  }
};

export default venues;
