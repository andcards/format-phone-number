import * as ALPHA_2 from './constants/alpha-2';
import {
  getAllData,
  getFullMaskByAlpha2,
  getShortMaskByAlpha2,
  getCountryCodeByAlpha2,
} from './utils/api';
import formatPhoneNumber from './utils/formatting';

export {
  ALPHA_2,
  getAllData,
  getFullMaskByAlpha2,
  getShortMaskByAlpha2,
  getCountryCodeByAlpha2,
};

export default formatPhoneNumber;
