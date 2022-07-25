const developmentEnv = process.env.REACT_APP_ENV === 'development' || process.env.NODE_ENV === 'development';

export const isDevelopment = () => {
  if (developmentEnv) return developmentEnv;
};
