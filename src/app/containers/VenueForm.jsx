import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Page from './../components/Page.jsx';
import {showPage, updateVenueFormField, createVenue, saveVenue} from './../actions';

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  title: stateProps.createVenueForm.title,
  form: {
    ...stateProps.createVenueForm.form,
    submit: {
      name: 'Save',
      action: function(venue) {
        if (venue._id) {
          dispatchProps.saveVenue(venue);
        } else {
          dispatchProps.createVenue(venue);
        }
      }.bind(null, stateProps.createVenueForm.venue)
    },
    cancel: {
      name: 'Cancel',
      action: dispatchProps.showPage.bind(null, 'venuesList')
    },
    onChange: dispatchProps.updateVenueFormField
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({showPage, updateVenueFormField, createVenue, saveVenue}, dispatch);

export default connect(state => state, mapDispatchToProps, mergeProps)(Page);
