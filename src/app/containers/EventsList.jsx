import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Page from './../components/Page.jsx';
import {showPage, editEvent, deleteEvent} from './../actions';

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  title: stateProps.events.title,
  actions: [
    {
      name: 'New Event',
      action: dispatchProps.showPage.bind(null, 'create')
    }
  ],
  list: {
    ...stateProps.events.list,
    actions: [
      {
        name: 'Edit',
        action: dispatchProps.editEvent
      },
      {
        name: 'Delete',
        action: dispatchProps.deleteEvent
      }
    ]
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({showPage, editEvent, deleteEvent}, dispatch);

export default connect(state => state, mapDispatchToProps, mergeProps)(Page);
