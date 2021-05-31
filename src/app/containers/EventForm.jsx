import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Page from './../components/Page.jsx';
import {showPage, createEvent, saveEvent, updateEventFormField} from './../actions';

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  title: stateProps.createEventForm.title,
  form: {
    ...stateProps.createEventForm.form,
    submit: {
      name: 'Save',
      action: function(event) {
        if (event._id) {
          dispatchProps.saveEvent(event);
        } else {
          dispatchProps.createEvent(event);
        }
      }.bind(null, stateProps.createEventForm.event)
    },
    cancel: {
      name: 'Cancel',
      action: dispatchProps.showPage.bind(null, 'list')
    },
    onChange: dispatchProps.updateEventFormField
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({showPage, createEvent, saveEvent, updateEventFormField}, dispatch);

export default connect(state => state, mapDispatchToProps, mergeProps)(Page);
