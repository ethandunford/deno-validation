/**
 * Checks if string is alphanumeric.
 * @param {string} str
 * @returns {boolean}
 */

const alphanumericRegex = /^[a-zA-z]*$/gmi;
export const isAlphanumeric = (str: string): boolean => {
  return alphanumericRegex.test(str);
};

/**
 * Checks if string is numeric.
 * @param {string} str
 * @returns {boolean}
 */

const numericRegex = /^[0-9]$/;
export const isNumeric = (str: string): boolean => {
  return numericRegex.test(str);
};

/**
 * Checks if string is only special characters.
 * @param {string} str
 * @returns {boolean}
 */

const specialCharactersRegex = /[^\w\s]/;
export const isSpecialCharacters = (str: string): boolean => {
  return specialCharactersRegex.test(str);
};

/**
 * Checks if value is not empty.
 * @param {str} any
 * @returns {boolean}
 */

export const isEmpty = (str: unknown): boolean => {
  return (String(str).trim() === "" || str === null ||
    str === undefined);
};

const floatRegex = /^\-?[0-9]+(e[0-9]+)?(\.[0-9]+)?$/;
export const isFloat = (str: string): boolean => {
  return floatRegex.test(str);
};
/**
 * Checks if string is a valid name.
 * @param {string} str
 * @returns {boolean}
 */

const nameRegex = /^[a-zA-Z]{2,30}/;
export const isName = (str: string, max = 30): boolean => {
  return nameRegex.test(str) && isBetween(str.length, 2, max);
};

/**
 * Checks if string is a valid email address.
 * @param {string} str
 * @returns {string}
 */

const emailRegExp =
  /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isEmail = (str: string): boolean => {
  return emailRegExp.test(str);
};

/**
 * Checks if string is a valid Uk phone number.
 * @param {string} str
 * @returns {boolean}
 */

const ukPhoneRegExp =
  /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
//  https://regexlib.com/(X(1)A(6x1QyuNeIYYraq0wz0eRJreuRN49frLuHzmJe95elM2bceQaEkkf9bwp8Idjah_DL3uARfPrB-QVR6QanrFmNRvOzGmjhX7yp2GXkULvotN1dB8lQEe39oXB3dcv0tWuD4NaK8tBmRfa0V6rCTBocuwOJqBCcntdSi2T4mTl6uUJrCO-sR3QQQC7xKx8kKjk0))/UserPatterns.aspx?authorid=d95177b0-6014-4e73-a959-73f1663ae814&AspxAutoDetectCookieSupport=1

export const isUkPhone = (str: string): boolean => {
  return ukPhoneRegExp.test(str);
};

/**
 * Checks if string is a valid Uk mobile number.
 * @param {string} str
 * @returns {boolean}
 */

const ukMobileRegex = /^07[1,3,4,5,7,8,9]\d{8}$/;
export const isUkMobile = (str: string): boolean => {
  return ukMobileRegex.test(str);
};

/**
 * Checks if string is has letters and spaces.
 * @param {string} str
 * @returns {boolean}
 */

const letterAndSpaceRegex = /^([a-zA-Z\s])|(?=[a-zA-Z\s])$/;
export const isLetterAndSpace = (str: string): boolean => {
  return letterAndSpaceRegex.test(str);
};

/**
 * Checks if string is has letters and spaces and numbers.
 * @param {string} str
 * @returns {boolean}
 */

const isLetterAndSpaceAndNumberRegex = /^[a-z A-Z0-9]+$/;
export const isLetterAndSpaceAndNumber = (str: string): boolean => {
  return isLetterAndSpaceAndNumberRegex.test(str);
};

/**
 * Checks if string is has numbers and spaces.
 * @param {string} str
 * @returns {boolean}
 */

const isNumberAndSpaceRegex = /^[ 0-9]+$/;
export const isNumberAndSpace = (str: string): boolean => {
  return isNumberAndSpaceRegex.test(str);
};

/**
 * Checks if string is a valid title
 * Mr, Ms, Mrs, Miss, Dr, Rev, Other
 * @param {string} str
 * @returns {boolean}
 */

const titles = ["mr", "ms", "mrs", "miss", "dr", "rev", "other"];
export const isTitle = (str: string): boolean => {
  return titles.includes(str.toLocaleLowerCase());
};

/**
 * Checks if string is a UK National Insurance Number
 * @param {string} str
 * @returns {boolean}
 */

const ukNationalInsuranceRegex = /^[A-Za-z]{2}[0-9]{6}[A-Za-z]{1}$/;
export const isUkNationalInsurance = (str: string): boolean => {
  return ukNationalInsuranceRegex.test(str);
};

/**
 * Checks if string is a UK National Insurance Number
 * Is the string between 5 to 7 characters?
 * Is the inward code first character numeric?
 * Are the last 2 characters non-numeric?
 * @param {string} str
 * @returns {boolean}
 */
const isUkPostCodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
export const isUkPostCode = (str: string): boolean => {
  return isUkPostCodeRegex.test(str);
};

/**
 * Checks if number is between two values
 * @param {number} number
 * @param {min} min
 * @param {max} max
 * @returns {boolean}
 */

export const isBetween = (
  number: number,
  min: number,
  max: number,
): boolean => {
  return (number > min && number < max);
};

/**
 * Checks if number is greater than
 * @param {number} number
 * @param {min} min
 * @returns {boolean}
 */

export const isGreaterThan = (number: number, min: number): boolean => {
  return (number > min);
};

/**
 * Checks if number is less than
 * @param {number} number
 * @param {max} max
 * @returns {boolean}
 */

export const isLessThan = (number: number, max: number): boolean => {
  return (number < max);
};

/**
 * Checks if string is between two values
 * @param {string} str
 * @param {min} min
 * @param {max} max
 * @returns {boolean}
 */
export const isLength = (str: string, min: number, max: number): boolean => {
  return (str.length > min && str.length < max);
};

/**
 * Checks if string is a yes or no
 * @param {string} str
 * @returns {boolean}
 */

const optionsYesOrNo = ["yes", "no"];
export const isYesOrNo = (str: string): boolean => {
  return optionsYesOrNo.includes(str.toLocaleLowerCase());
};

/**
 * Checks if string is a valid martial status
 * single, married, civil partnered, divorced, widowed,
 * @param {string} str
 * @returns {boolean}
 */

const optionsMartialStatus = [
  "single",
  "married",
  "civil partnered",
  "divorced",
  "widowed",
];
export const isMaritalStatus = (str: string): boolean => {
  return optionsMartialStatus.includes(str.toLowerCase());
};
/**
 * Checks if string is a valid json
 * @param {string} str
 * @returns {boolean}
 */

export const isValidJson = (str: string): boolean => {
  try {
    if (str === "") return false;
    JSON.parse(str) !== null;
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if string is a valid IP V4 address
 * @param {string} str
 * @returns {boolean}
 */
const isIpV4RegEx = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
export const isIpV4 = (str: string): boolean => {
  return isIpV4RegEx.test(str);
};

/**
 * Checks if string is a valid IP V6 address
 * @param {string} str
 * @returns {boolean}
 */
const isIpV6RegEx =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
export const isIpV6 = (str: string): boolean => {
  return isIpV6RegEx.test(str);
};

/**
 * Checks if string is a valid URL
 * @param {string} str
 * @returns {boolean}
 */
const isUrlRegEx = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
export const isUrl = (str: string): boolean => {
  return isUrlRegEx.test(str);
};

export const isDate = (str: string) => {
  return Date.parse(str) > 0;
};

const isDateDDMMYYYYRegEx = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/;
export const isDateDDMMYYYY = (str: string): boolean => {
  return isDateDDMMYYYYRegEx.test(str);
};
