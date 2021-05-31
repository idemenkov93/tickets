const createEventForm = (state = {form: null}, action) => {
  switch (action.type) {
    case 'CREATE_EVENT_VALIDATION_FAILED':
      return {...state, errors: action.errors};
    case 'UPDATE_EVENT_FORM_FIELD':
      return {
        ...state,
        event: {
          ...state.event,
          [action.data.field]: action.data.value
        }
      }
    case 'SHOW_PAGE':
      if (action.page === 'create') {
        return {
          ...state,
          event: {},
          title: 'Create Event',
          form: {
            fields: {
              title: {
                params: {
                  placeholder: 'Event title...',
                  label: 'Title'
                },
                type: 'textField'
              },
              description: {
                params: {
                  placeholder: 'Event description...',
                  label: 'Title'
                },
                type: 'textField'
              },
              date: {
                params: {
                  placeholder: 'Event date...',
                  label: 'Title'
                },
                type: 'textField'
              }
            },
            error: null
          }
        };
      }

      return state;
    case 'EDIT_EVENT':
      return {
        ...state,
        title: 'Edit Event',
        event: action.event,
        form: {
          fields: {
            title: {
              params: {
                placeholder: 'Event title...',
                defaultValue: action.event.title,
                label: 'Title'
              },
              type: 'textField'
            },
            description: {
              params: {
                placeholder: 'Event description...',
                defaultValue: action.event.description,
                label: 'Description'
              },
              type: 'textField'
            },
            date: {
              params: {
                placeholder: 'Event date...',
                defaultValue: action.event.date,
                label: 'Date'
              },
              type: 'textField'
            }
          },
          error: null
        }
      };
    case 'UPDATE_EVENT_FORM_FIELD':
      return {
        ...state,
        event: {
          ...state.event,
          [action.data.field]: action.data.value
        }
      }
    default:
      return state;
  }
};

export default createEventForm;
