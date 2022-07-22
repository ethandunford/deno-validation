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

export function isName(str: string): boolean {
  return str.match(/^[a-zA-Z]{2,30}/) !== null;
}

/**
 * Checks if string is a valid email address.
 * @param {string} str
 * @returns {string}
 */

 export function isEmail(str: string): boolean {
  return str.match(
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ) !== null;
}


/**
 * Checks if string is a valid GB mobile number.
 * full time|part Time|self employed|unemployed|other
 * @param {string} str
 * @returns {boolean}
 */
 export function isGbMobile(str: string): boolean {
  return str.match(/((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/) !== null;
}

/**
 * Checks if string is a valid GB phone number.
 * full time|part Time|self employed|unemployed|other
 * @param {string} str
 * @returns {boolean}
 */
export function isGbPhone(str: string): boolean {
  //  https://regexlib.com/(X(1)A(6x1QyuNeIYYraq0wz0eRJreuRN49frLuHzmJe95elM2bceQaEkkf9bwp8Idjah_DL3uARfPrB-QVR6QanrFmNRvOzGmjhX7yp2GXkULvotN1dB8lQEe39oXB3dcv0tWuD4NaK8tBmRfa0V6rCTBocuwOJqBCcntdSi2T4mTl6uUJrCO-sR3QQQC7xKx8kKjk0))/UserPatterns.aspx?authorid=d95177b0-6014-4e73-a959-73f1663ae814&AspxAutoDetectCookieSupport=1
  return str.match(
    /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/
  ) !== null;
}