const createVenueForm = (state = {form: null, venue: {title: undefined, city: undefined, url: undefined, imageUrl: undefined}, title: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_VENUE_FORM_FIELD':
      return {
        ...state,
        venue: {
          ...state.venue,
          [action.data.field]: action.data.value
        }
      }
    case 'SHOW_PAGE':
      if (action.page === 'createVenue') {
        return {
          ...state,
          venue: {title: undefined, city: undefined, url: undefined, imageUrl: undefined},
          title: 'Create Venue',
          form: {
            fields: {
              title: {
                params: {
                  placeholder: 'Venue title...',
                  label: 'Title'
                },
                type: 'textField'
              },
              city: {
                params: {
                  placeholder: 'Venue city...',
                  label: 'City'
                },
                type: 'textField'
              },
              url: {
                params: {
                  placeholder: 'Venue URL...',
                  label: 'URL'
                },
                type: 'textField'
              },
              imageUrl: {
                params: {
                  placeholder: 'Venue image URL...',
                  label: 'Image URL'
                },
                type: 'textField'
              }
            },
            error: null
          }
        };
      }

      return state;
    case 'EDIT_VENUE':
      return {
        ...state,
        title: 'Edit Venue',
        venue: action.venue,
        form: {
          fields: {
            title: {
              params: {
                placeholder: 'Venue title...',
                defaultValue: action.venue.title,
                label: 'Title'
              },
              type: 'textField'
            },
            city: {
              params: {
                placeholder: 'Venue city...',
                defaultValue: action.venue.city,
                label: 'City'
              },
              type: 'textField'
            },
            url: {
              params: {
                placeholder: 'Venue URL...',
                defaultValue: action.venue.url,
                label: 'URL'
              },
              type: 'textField'
            },
            imageUrl: {
              params: {
                placeholder: 'Venue image URL...',
                defaultValue: action.venue.imageUrl,
                label: 'Image URL'
              },
              type: 'textField'
            },
          },
          error: null
        }
      };
    default:
      return state;
  }
};

export default createVenueForm;
