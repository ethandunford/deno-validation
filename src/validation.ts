export const isEmpty = (str: any) : boolean => {
    return (String(str).trim() === "" || str?.length === 0 || str === null ||  str === undefined)
};