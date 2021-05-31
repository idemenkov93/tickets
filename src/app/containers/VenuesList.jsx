import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Page from './../components/Page.jsx';
import {showPage, deleteVenue, editVenue} from './../actions';

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  title: stateProps.venues.title,
  actions: [
    {
      name: 'New Venue',
      action: dispatchProps.showPage.bind(null, 'createVenue')
    }
  ],
  list: {
    ...stateProps.venues.list,
    actions: [
      {
        name: 'Edit',
        action: dispatchProps.editVenue
      },
      {
        name: 'Delete',
        action: dispatchProps.deleteVenue
      }
    ]
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({showPage, deleteVenue, editVenue}, dispatch);

export default connect(state => state, mapDispatchToProps, mergeProps)(Page);
