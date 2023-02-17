// import _ from 'lodash';

const capitalize = (text) => {
  if (text === "") {
    return "";
  }
  const firstChar = text[0].toUpperCase();
  const restSubString = text.slice(1);
  return `${firstChar}${restSubString}`;
};

export default capitalize;
