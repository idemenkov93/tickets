import React from 'react';

import Form from './Form.jsx';
import ListView from './ListView.jsx';
import TopNavigation from './TopNavigation.jsx';
import ActionBar from './ActionBar.jsx';

class Page extends React.Component {
  getTitle() {
    return <h1>{this.props.title}</h1>
  }

  getContent() {
    if (this.props.form) {
      return <Form {...this.props.form} />;
    }

    if (this.props.list) {
      return <ListView {...this.props.list} />;
    }
  }

  render() {
    return (
      <div className="container-fluid page">
        <TopNavigation {...this.props.navigation} />
        <main className="row">
          <div className="col-xs-12">
            {this.getTitle()}
            {this.getContent()}
            <ActionBar actions={this.props.actions} />
          </div>
        </main>
      </div>
    );
  }
}

Page.propTypes = {
  title: React.PropTypes.string.isRequired
};

Page.defaultProps = {
  title: ''
};

export default Page;
