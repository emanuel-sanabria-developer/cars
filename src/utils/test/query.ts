// A few helper function for react testing library
// to use with those elements that already have classNames
//because they have styles applied to them
export const query = (selector: string) =>
  document.body.querySelector(selector);

export const queryAll = (selector: string) =>
  Array.from(document.body.querySelectorAll(selector));

export const get = (selector: string) => {
  const elem = query(selector);
  if (!elem) {
    throw new Error(`selector '${selector}' could not be found`);
  }
  return elem;
};

export const getAll = (selector: string) => {
  const elems = queryAll(selector);
  if (!elems.length) {
    throw new Error(`selector '${selector}' could not be found`);
  }
  return elems;
};

export const exists = (selector: string) => !!query(selector);
export const count = (selector: string) => queryAll(selector).length;
