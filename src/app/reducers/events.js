const events = (state = {list: null, title: ''}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.event];
    case 'EVENTS_LIST_RECEIVED':
      return {
        list: {
          dataSource: action.events,
          fields: {
            title: 'Title',
            description: 'Description',
            date: 'Date'
          }
        },
        title: 'Events List'
      };
    default:
      return state;
  }
};

export default events;
