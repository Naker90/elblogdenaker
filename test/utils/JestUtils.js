module.exports = function mockAllMethods(obj) {
    console.log(obj);
    let mockedObj = {};
    let methods = Object.keys(obj);
    methods.forEach(method => mockedObj[method] = jest.fn());
    return mockedObj;
};