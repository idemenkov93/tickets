export const getEventsList = () => ({
  type: 'GET_EVENTS_LIST'
});

export const eventsListReceived = events => ({
  type: 'EVENTS_LIST_RECEIVED',
  events
});

export const showPage = (page, update) => ({
  type: 'SHOW_PAGE',
  page
});

export const createEvent = data => ({
  type: 'CREATE_EVENT',
  data
});

export const createEventValidationFailed = errors => ({
  type: 'CREATE_EVENT_VALIDATION_FAILED',
  errors
});

export const editEvent = event => ({
  type: 'EDIT_EVENT',
  event
});

export const saveEvent = event => ({
  type: 'SAVE_EVENT',
  event
});

export const deleteEvent = event => ({
  type: 'DELETE_EVENT',
  event
});

export const updateVenueFormField = data => ({
  type: 'UPDATE_VENUE_FORM_FIELD',
  data
});

export const editVenue = venue => ({
  type: 'EDIT_VENUE',
  venue
});

export const saveVenue = venue => ({
  type: 'SAVE_VENUE',
  venue
});

export const createVenue = data => ({
  type: 'CREATE_VENUE',
  data
});

export const deleteVenue = venue => ({
  type: 'DELETE_VENUE',
  venue
});

export const getVenuesList = () => ({
  type: 'GET_VENUES_LIST'
});

export const venuesListReceived = venues => ({
  type: 'VENUES_LIST_RECEIVED',
  venues
});

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});

export const updateEventFormField = data => ({
  type: 'UPDATE_EVENT_FORM_FIELD',
  data
});

export const updateLoginFormField = data => ({
  type: 'UPDATE_LOGIN_FORM_FIELD',
  data
});

export const loginUserValidationFailed = error => ({
  type: 'LOGIN_USER_VALIDATION_FAILED',
  error
});
