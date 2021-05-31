import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {loginUser, updateLoginFormField} from './../actions';
import LoginForm from './../components/LoginForm.jsx';

const mapStateToProps = state => state.loginForm;

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  submit: {
	  name: 'Login',
	  action: dispatchProps.loginUser.bind(null, stateProps.user)
  },
  onChange: dispatchProps.updateLoginFormField
});

const mapDispatchToProps = dispatch => bindActionCreators({loginUser, updateLoginFormField}, dispatch);

export default connect(state => state.loginForm, mapDispatchToProps, mergeProps)(LoginForm);
