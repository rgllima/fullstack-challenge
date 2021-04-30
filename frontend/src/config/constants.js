let BASE_URL = process.env.REACT_APP_PROD_BASE_URL;

if (process.env.NODE_ENV !== 'production') {
  BASE_URL = process.env.REACT_APP_DEV_BASE_URL
}

export const API = {
  BASE_URL
};
