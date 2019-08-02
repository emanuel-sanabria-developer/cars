// both would have been used if codesandbox would allow using jest.mock
export const flushPromises = () => Promise.resolve(setImmediate);
export const getMock = (func: any) => func as jest.Mock<any>;
