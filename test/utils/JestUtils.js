function JestUtils(){

    function mockAllMethods({obj}) {
        let mockedObj = {};
        let methods = Object.keys(obj);
        methods.forEach(method => mockedObj[method] = jest.fn());
        return mockedObj;
    }

    return {
        mockAllMethods: mockAllMethods
    }
}

module.exports = JestUtils();