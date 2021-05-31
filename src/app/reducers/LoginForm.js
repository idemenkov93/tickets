const loginForm = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER_VALIDATION_FAILED':
      return {...state, error: action.error};
    case 'UPDATE_LOGIN_FORM_FIELD':
      return {
        ...state,
        user: {
          ...state.user,
          [action.data.field]: action.data.value
        }
      }
    case 'SHOW_PAGE':
      if (action.page === 'login') {
        return {
          error: '',
          user: {email: undefined, password: undefined},
          fields: {
            email: {
              type: 'textField',
              params: {
                error: '',
                placeholder: 'Username or email...',
                label: 'Login'
              }
            },
            password: {
              type: 'passwordField',
              params: {
                error: '',
                placeholder: 'Your password...',
                label: 'Password'
              }
            }
           }
          }
        }
    default:
      return state;
  }
};

export default loginForm;
