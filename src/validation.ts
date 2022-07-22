export const isEmpty = (str: any): boolean => {
  return (String(str).trim() === "" || str?.length === 0 || str === null ||
    str === undefined);
};

// WARNING: we exclude Isle of Man mobile numbers
const ukMobileRegex: RegExp = /^07[1,3,4,5,7,8,9]\d{8}$/;

export const isUkMobile = (mobile: string): boolean => {
    return ukMobileRegex.test(mobile)
}