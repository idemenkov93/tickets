const logger = store => next => action => {
  console.log('Action triggered:', action);

  return next(action);
};

export default logger;
