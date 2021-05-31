import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showPage} from './../actions';

import EventsList from './EventsList.jsx';
import EventForm from './EventForm.jsx';
import VenueForm from './VenueForm.jsx';
import VenuesList from './VenuesList.jsx';
import LoginForm from './LoginForm.jsx'

class Application extends React.Component {
  componentDidMount() {
    this.props.showPage('login');
  }

  getPage() {
    if (this.props.page.id === 'create') {
      return <EventForm />;
    } else if (this.props.page.id === 'login') {
      return <LoginForm />;
    } else if (this.props.page.id === 'createVenue') {
      return <VenueForm />;
    } else if (this.props.page.id === 'venuesList') {
      return <VenuesList />;
    } else {
      return <EventsList />;
    }
  }

  render() {
    return (
      <div>{this.getPage()}</div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({showPage}, dispatch);

export default connect(state => state, mapDispatchToProps)(Application);
