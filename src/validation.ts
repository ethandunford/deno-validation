/**
 * Checks if value is not empty.
 * @param {str} any
 * @returns {boolean}
 */

export const isEmpty = (str: any): boolean => {
  return (String(str).trim() === "" || str?.length === 0 || str === null ||
    str === undefined);
};

/**
 * Checks if string is a valid name.
 * @param {string} str
 * @returns {boolean}
 */

const nameRegex: RegExp = /^[a-zA-Z]{2,30}/;
export const isName = (str: string): boolean => {
  return nameRegex.test(str);
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

const ukMobileRegex: RegExp = /^07[1,3,4,5,7,8,9]\d{8}$/;
export const isUkMobile = (str: string): boolean => {
  return ukMobileRegex.test(str);
};

const letterAndSpaceRegex: RegExp = /^\b(?!.*?\s{2})[A-Za-z ]{1,50}\b$/
export const isLetterAndSpace = (str: string): boolean => {
  return letterAndSpaceRegex.test(str)
}